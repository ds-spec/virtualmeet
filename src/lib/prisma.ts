import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
// this above line is actually because Next.js (dev mode me) hot reload karta hai → har reload par file re-import hoti hai. Agar har baar new PrismaClient() banega, to database connection limit exceed ho sakti hai
