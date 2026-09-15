import bcrypt from "bcryptjs";

export const hashPassword = async (
  password: string,
  salt: number = 12,
): Promise<string> => {
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  hashedPassword: string,
  password: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
