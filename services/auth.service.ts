import { comparePassword, hashPassword } from "@/lib/auth/password";
import AppError from "@/lib/errors/AppError";
import { db } from "@/prisma/db";

interface RegisterUserProps {
  name: string;
  email: string;
  password: string;
}

type LoginUserProps = Omit<RegisterUserProps, "name">;

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
    id: user.id,
    name: user.name,
    userVerified: user.userVerified,
  };
};

export const loginUser = async ({ email, password }: LoginUserProps) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Email doesn't exist. Please create an account", 401);
  }

  const isPasswordValid = await comparePassword(user.passwordHash, password);

  if (!isPasswordValid) {
    throw new AppError("Invalid email and password", 401);
  }

  return {
    id: user.id,
    name: user.name,
    userVerified: user.userVerified,
  };
};
