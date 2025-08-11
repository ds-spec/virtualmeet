import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      try {
        const exisitingUser = await prisma.user.findUnique({
          where: { email: user.email! }, // ! -> ye bolta hai ki user.email kabhi null ya undefined nahi hoga toh warning mtt dena
        });
        if (!exisitingUser) {
          await prisma.user.create({
            data: {
              email: user.email!,
              name: user.name,
              profileImage: user.image,
              corePrompt: process.env.SYSTEM_PROMPT,
            },
          });
        }
        return true;
      } catch (err) {
        console.error("Error during sign-in", err);
        return false;
      } finally {
        await prisma.$disconnect;
      }
    },
  },
  session: {
    strategy: "jwt",
  },
};
