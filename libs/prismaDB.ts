/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = client;

// async function main() {
//   // ... you will write your Prisma Client queries here
// }

export default client;

/* check declare global - https://bobbyhadz.com/blog/typescript-declare-global-variable */
