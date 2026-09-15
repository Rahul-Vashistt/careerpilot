import { getAccessToken } from "./cookies";
import { verifyAccessToken } from "./tokens";

export const getCurrentUser = async () => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }

  try {
    const payload = await verifyAccessToken(accessToken);

    if (!payload.sub) {
      return null;
    }

    return {
      id: payload.sub,
    };
  } catch {
    return null;
  }
};
