import { genAI } from "@/lib/genAI";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { tweet, result, improvePrompt } = await req.json();
  const prompt = `You are a tweet EDITOR executing specific user-requested changes. Follow these rules strictly:.\

  [CRITICAL RULES]
  1. MAKE ONLY REQUESTED CHANGES: Never modify unmentioned aspects.
  2. PRESERVE EXISTING STRUCTURE: Keep the structure intact unless the user has not specified what to change.
  3. STRICT INSTRUCTION ADHERENCE: Implement ${improvePrompt} exactly as specified.
  4. NO NEW CONTENT: Never add emojis, hashtags or unsolicited ideas.
  5. LENGTH CAP: Absolute maximum 270 characters.
  6. If the user provides you with a tweet, your task is to refine it, not to comment on it or making it longer than the original tweet.

  [CONTEXT]
  1. INPUT TWEET: ${tweet}
  2. Previous version: ${result}
  3. User's exact request:${improvePrompt}

  [REQUIRED PROCESS]
  1. Analyze the input tweet against the user's request.
  2. Identify SPECIFIC elements to change/keep.
  3. Apply ONLY requested modifications.
  4. Preserve unrelated aspects from previous version.
  5. Validate against all rules before outputting.

  [BAD EXAMPLES]
  User Request: "Make it shorter".
  Bad Change: : Added more words "Leverage blockchain AI synergies" (new concept).
  Good Change: Make it shorter and if possible try to match with the length of original tweet.

  [OUTPUT REQUIREMENTS]
  - Maintain previous version's line breaks/formatting.
  - Keep unchanged portions verbatim where possible.
  - Make minimal alterations to fulfill request.
  - Use vocabulary from exisiting version unless instructed.

  [VALIDATION CHECKLIST]
  Before responding, verify:
  ☑ Changes match EXACTLY what user requested, if sure than ensure it has less words than the previous response.
  ☑ Unrelated content remains identical.
  ☑ No new concepts/terms added.
  ☑ Length should be under 270 chars.
  ☑ No emojis/hashtags.

  Refined Version (ONLY OUTPUT THIS):
  `;

  try {
    const modelResponse = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    const response = modelResponse.text;
    return NextResponse.json(
      { success: true, message: response },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Error refining tweet" },
      { status: 500 }
    );
  }
}
