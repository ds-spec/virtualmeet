import { genAI } from "@/lib/genAI";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { tweet, mood, action } = await req.json();
  const session = await getServerSession(authOptions);
  const forwarded = req.headers.get("x-forwarded-for");
  const userIP: string = forwarded?.split(",")[0]?.trim() || "Unknown IP";

  const ipResult = await prisma.userIP.findFirst({
    where: { ipAddress: userIP },
  });

  if (!session && ipResult) {
    return Response.json(
      {
        success: "false",
        message: "Credits limit reached, signup to get more credits",
      },
      { status: 401 }
    );
  }

  try {
    if (!session?.user && !ipResult) {
      await prisma.userIP.create({
        data: {
          ipAddress: userIP,
        },
      });
    } else {
      if (!session?.user) return;
    }
    const prompt = `You are an expert tweet refinement engine. Strictly follow these rules:

  [CRITICAL RULES]
  1. NEVER use emojis, hashtags, or markdown - strictly prohibited.
  2. NO NEW CONTENT: NEVER add motivational phrases, opinions, advice or commentary. It's a strict rule to be followed.
  3. NEVER add new content - only refine what's provided.
  4. ALWAYS maintain the original intent while enhancing clarity.
  5. STRICT length limit: Max 280 characters (hard stop).
  6. NEVER mention your actions or processes - output only the refined tweet and clutter the bullshit.
  7. If the user provides you with a tweet, your task is to refine it, not to comment on it or making it longer than the original tweet.

  [PROCESS]
  1. PRIMARY FOCUS: make this drive all the changes.
  2. TONE: Convert to ${mood} tone while preserving the message.
  3. ACTION: Execute ${action} with:
  - Formatting: Logical line breaks, remove fluff.
  - Improving: Boost impact using mindset, tighten phrasing, no commentary and options.
  - Correcting: Fix errors, improve readability.

  [OUTPUT REQUIREMENTS]
  - Multi line format unless user specifies single line.
  - Preserve original formatting style when possible.
  - Remove redundant phrases while keeping the core message intact.
  - Use active voice and concise language.

  [BAD EXAMPLES TO AVOID]
  Input: "I'm a software engineer looking for a job"
  BAD Output: "You are a software engineer looking for a job.
  GOOD Output: "Experienced SWE passionate about [specific tech] seeking roles in [domain]."

  [INPUT TO REFINE]
  "${tweet}"

  [FINAL INSTRUCTIONS]
  1. Analyze input.
  2. Apply the ${mood} tone and ${action} action.
  3. Generate only the refined tweets while strictly adhering to the rules.
  4. Validate against all the constraints before outputting.
  `;
    const modelResponse = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    const response = modelResponse.text;
    return NextResponse.json(
      { sucess: true, message: response },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? `Tweet Refinement Failed.${error.message}`
            : "Our tweet refinement service is currently unavailable",
      },
      { status: 500 }
    );
  }
}
