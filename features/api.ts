import { api } from "@/lib/api/axios";
import axios from "axios";

interface SignupData {
  name: string;
  email: string;
  password: string;
}

export const signup = async (data: SignupData) => {
  try {
    const res = await api.post("/auth/signup", data);

    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    }

    throw new Error("Something went wrong. Please try again.");
  }
};
