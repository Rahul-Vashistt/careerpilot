import { completeOnboarding } from "@/features/onboarding/api/onboarding";
import { useMutation } from "@tanstack/react-query";

export function useCompleteOnboarding() {
  return useMutation({
    mutationFn: completeOnboarding,
  });
}
