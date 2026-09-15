import { hashPassword } from "@/lib/auth/password";
import AppError from "@/lib/errors/AppError";
import { db } from "@/prisma/db";

interface RegisterUserProps {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async ({
  name,
  email,
  password,
}: RegisterUserProps) => {
  const exisitingUser = await db.user.findUnique({
    where: { email },
  });

  if (exisitingUser) {
    throw new AppError("Email already registered", 409);
  }

  const hashedPassword = await hashPassword(password);

  const user = await db.user.create({
    data: {
      name,
      email,
      passwordHash: hashedPassword,
    },
  });

  return {
    name: user.name,
    userVerified: user.userVerified,
  };
};
