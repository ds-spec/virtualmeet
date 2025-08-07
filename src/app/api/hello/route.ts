import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const prisma = new PrismaClient();
console.log(prisma);

type ResponseData = {
  message: string;
};
type Users = {
  id: number;
  name: string;
  age: number;
};

const userSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.email({ message: "email is invalid" }),
  hasPassword: z.boolean().optional(),
});

export function GET() {
  const users: Users[] = [
    {
      id: 1,
      name: "Bob",
      age: 26,
    },
    {
      id: 2,
      name: "Alice",
      age: 24,
    },
  ];
  return NextResponse.json(users, {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = userSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(errors, { status: 400 });
    }

    const { name, email, hasPassword } = parsed.data;

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        hasPassword,
      },
    });

    return NextResponse.json(newUser, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
  }
}
