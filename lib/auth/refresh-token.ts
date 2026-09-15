import crypto from "crypto";

export const createRefreshToken = () => {
  return crypto.randomBytes(64).toString("hex");
};

export const hashRefreshToken = (refreshToken: string) => {
  return crypto.createHash("sha256").update(refreshToken).digest("hex");
};

export const verifyRefreshToken = (
  refreshToken: string,
  hashedRefreshToken: string,
) => {
  const hashedIncomingToken = hashRefreshToken(refreshToken);

  return crypto.timingSafeEqual(
    Buffer.from(hashedIncomingToken, "hex"),
    Buffer.from(hashedRefreshToken, "hex"),
  );
};
