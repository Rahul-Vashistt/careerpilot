export const validateAuthInput = (
  input: unknown,
  field: string,
): string | null => {
  if (typeof input !== "string" || !input.trim()) {
    return `${field} is required`;
  }

  return null;
};
