import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET!);

export const createAccessToken = async (userId: string) => {
  return new SignJWT({
    sub: userId,
    type: "access",
  })
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(secret);
};

export const verifyAccessToken = async (token: string) => {
  const { payload } = await jwtVerify(token, secret, {
    algorithms: ["HS256"],
  });

  return payload;
};
