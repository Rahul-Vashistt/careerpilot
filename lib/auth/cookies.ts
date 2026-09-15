import { cookies } from "next/headers";

const ACCESS_TOKEN_COOKIE = "access_token";
const REFRESH_TOKEN_COOKIE = "refresh_token";

export const sethAuthCookies = async (
  accessToken: string,
  refreshToken: string,
  days: number,
) => {
  const cookieStore = await cookies();

  cookieStore.set(ACCESS_TOKEN_COOKIE, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * days,
  });

  cookieStore.set(REFRESH_TOKEN_COOKIE, refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * days,
  });
};

export const getAccessToken = async () => {
  const cookieStore = await cookies();

  return cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
};

export const getRefreshToken = async () => {
  const cookieStore = await cookies();

  return cookieStore.get(REFRESH_TOKEN_COOKIE)?.value;
};

export const clearAuthCookies = async () => {
  const cookieStore = await cookies();

  cookieStore.delete(ACCESS_TOKEN_COOKIE);
  cookieStore.delete(REFRESH_TOKEN_COOKIE);
};
