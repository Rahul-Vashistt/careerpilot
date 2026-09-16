import { setAuthCookies } from "@/lib/auth/cookies";
import { createAccessToken } from "@/lib/auth/tokens";
import { validateAuthInput } from "@/lib/auth/validation";
import AppError from "@/lib/errors/AppError";
import handleError from "@/lib/errors/handleError";
import { loginUser } from "@/services/auth.service";
import { createRefreshTokenSession } from "@/services/refresh-token.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, rememberMe } = await req.json();

    const error =
      validateAuthInput(email, "Email") ||
      validateAuthInput(password, "Password");

    if (error) {
      throw new AppError("Invalid email and password", 400);
    }

    const user = await loginUser({ email, password });

    const { refreshToken: newRefreshToken, expiresAt } =
      await createRefreshTokenSession(user.id, rememberMe);
    const accessToken = await createAccessToken(user.id);

    await setAuthCookies(accessToken, newRefreshToken, expiresAt);

    return NextResponse.json(
      {
        message: "User logged in successfully",
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    return handleError(err);
  }
}
