import { api } from "@/lib/api/axios";
import axios from "axios";

interface SignupData {
  name: string;
  email: string;
  password: string;
}

type SigninData = Omit<SignupData, "name"> & {
  rememberMe: boolean
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

export const signin = async (data: SigninData) => {
  try {
    const res = await api.post("/auth/signin", data);

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
