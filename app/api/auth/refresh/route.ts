import { getRefreshToken, setAuthCookies } from "@/lib/auth/cookies";
import { createAccessToken } from "@/lib/auth/tokens";
import AppError from "@/lib/errors/AppError";
import handleError from "@/lib/errors/handleError";
import { rotateRefreshToken } from "@/services/refresh-token.service";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const refreshToken = await getRefreshToken();

    if (!refreshToken) {
      throw new AppError("Invalid refresh token", 401);
    }

    const {
      userId,
      refreshToken: newRefreshToken,
      expiresAt,
    } = await rotateRefreshToken(refreshToken);

    const accessToken = await createAccessToken(userId);

    await setAuthCookies(accessToken, newRefreshToken, expiresAt);

    return NextResponse.json(
      {
        message: "Token refreshed successfully",
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    return handleError(err);
  }
}
