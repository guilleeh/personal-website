import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import invariant from "tiny-invariant";

import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[]
): Omit<User, Key> {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(email: User["email"], password: string) {
  invariant(process.env.HASH_ROUNDS, "HASH_ROUNDS must be set");

  const hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.HASH_ROUNDS)
  );

  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
}

export async function deleteUserByEmail(email: User["email"]) {
  return prisma.user.delete({ where: { email } });
}

export async function verifyLogin(
  email: User["email"],
  password: User["password"]
) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(password, userWithPassword.password);

  if (!isValid) {
    return null;
  }

  const userWithoutPassword = exclude(userWithPassword, ["password"]);

  return userWithoutPassword;
}
