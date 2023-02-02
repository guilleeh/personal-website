import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import invariant from "tiny-invariant";

const db = new PrismaClient();

async function seed() {
  invariant(process.env.ADMIN_USER_PASSWORD, "ADMIN_USER_PASSWORD must be set");
  invariant(process.env.ADMIN_USER_EMAIL, "ADMIN_USER_EMAIL must be set");
  invariant(process.env.HASH_ROUNDS, "HASH_ROUNDS must be set");

  const password = await bcrypt.hash(
    process.env.ADMIN_USER_PASSWORD,
    Number(process.env.HASH_ROUNDS)
  );

  await db.user.create({
    data: {
      email: process.env.ADMIN_USER_EMAIL,
      password: password,
      admin: true,
    },
  });
}

seed();
