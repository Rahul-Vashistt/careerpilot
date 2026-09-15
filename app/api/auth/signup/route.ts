import { NextResponse } from "next/server";

import { validateAuthInput } from "@/lib/auth/validation";
import handleError from "@/lib/errors/handleError";

import AppError from "@/lib/errors/AppError";
import { registerUser } from "@/services/auth.service";
import { createAccessToken } from "@/lib/auth/tokens";
import { setAuthCookies } from "@/lib/auth/cookies";
import { createRefreshTokenSession } from "@/services/refresh-token.service";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const error =
      validateAuthInput(name, "Name") ||
      validateAuthInput(email, "Email") ||
      validateAuthInput(password, "Password");

    if (error) {
      throw new AppError(error, 400);
    }

    const user = await registerUser({ name, email, password });

    const accessToken = await createAccessToken(user.id);
    const { refreshToken, expiresAt } = await createRefreshTokenSession(
      user.id,
      false,
    );

    await setAuthCookies(accessToken, refreshToken, expiresAt);

    return NextResponse.json(
      {
        message: "User registered successfully",
        user,
      },
      { status: 201 },
    );
  } catch (error) {
    return handleError(error);
  }
}
