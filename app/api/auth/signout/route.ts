import { clearAuthCookies, getRefreshToken } from "@/lib/auth/cookies";
import handleError from "@/lib/errors/handleError";
import { revokeRefreshToken } from "@/services/refresh-token.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const refreshToken = await getRefreshToken();

    if (refreshToken) {
      await revokeRefreshToken(refreshToken);
    }

    await clearAuthCookies();

    return NextResponse.json(
      {
        message: "User logged out successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return handleError(error);
  }
}
