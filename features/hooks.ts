import { useMutation } from "@tanstack/react-query";
import { signin, signup } from "./api";

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};

export const useSignin = () => {
  return useMutation({
    mutationFn: signin,
  });
};
