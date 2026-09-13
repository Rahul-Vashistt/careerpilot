import { api } from "@/lib/api/axios";

interface SignupData {
  name: string;
  email: string;
  password: string;
}

export const signup = async (data: SignupData) => {
  const res = await api.post("/auth/signup", data);

  return res.data;
};
