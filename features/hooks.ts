import { useMutation } from "@tanstack/react-query";
import { signup } from "./api";

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};
