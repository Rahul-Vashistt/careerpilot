import { completeOnboarding } from "@/lib/api/onboarding";
import { useMutation } from "@tanstack/react-query";

export function useCompleteOnboarding() {
  return useMutation({
    mutationFn: completeOnboarding,
  });
}
