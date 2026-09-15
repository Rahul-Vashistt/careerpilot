import { createRefreshToken, hashRefreshToken } from "@/lib/auth/refresh-token";
import AppError from "@/lib/errors/AppError";
import { db } from "@/prisma/db";

const REFRESH_TOKEN_LIFETIMES = {
  rememberMe: 15 * 24 * 60 * 60 * 1000,
  default: 1 * 24 * 60 * 60 * 1000,
};

export const createRefreshTokenSession = async (
  userId: string,
  rememberMe: boolean,
) => {
  const refreshToken = createRefreshToken();
  const tokenHash = hashRefreshToken(refreshToken);

  const tokenLifetime = rememberMe
    ? REFRESH_TOKEN_LIFETIMES.rememberMe
    : REFRESH_TOKEN_LIFETIMES.default;

  const expiresAt = new Date(Date.now() + tokenLifetime);

  await db.refreshToken.create({
    data: {
      tokenHash,
      userId,
      expiresAt,
    },
  });

  return {
    refreshToken,
    expiresAt,
  };
};

export const findRefreshTokenSession = async (refreshToken: string) => {
  const tokenHash = hashRefreshToken(refreshToken);

  const session = await db.refreshToken.findUnique({
    where: {
      tokenHash,
    },
  });

  if (!session) return null;

  if (session.expiresAt <= new Date()) return null;

  if (session.revokedAt) return null;

  return session;
};

export const revokeRefreshToken = async (refreshToken: string) => {
  const tokenHash = hashRefreshToken(refreshToken);

  await db.refreshToken.updateMany({
    where: {
      tokenHash,
      revokedAt: null,
    },
    data: {
      revokedAt: new Date(),
    },
  });
};

export const rotateRefreshToken = async (refreshToken: string) => {
  const session = await findRefreshTokenSession(refreshToken);

  if (!session) {
    throw new AppError("Invalid refresh token", 401);
  }

  await revokeRefreshToken(refreshToken);

  const remainingLifetime = session.expiresAt.getTime() - Date.now();

  const newRefreshToken = createRefreshToken();
  const newTokenHash = hashRefreshToken(newRefreshToken);

  const newExpiresAt = new Date(Date.now() + remainingLifetime);

  await db.refreshToken.create({
    data: {
      tokenHash: newTokenHash,
      userId: session.userId,
      expiresAt: newExpiresAt,
    },
  });

  return {
    userId: session.userId,
    refreshToken: newRefreshToken,
    expiresAt: newExpiresAt,
  };
};
