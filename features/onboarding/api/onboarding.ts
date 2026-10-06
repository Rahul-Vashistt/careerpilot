import { api } from "@/lib/api/axios";
import type { CompleteOnboardingRequest } from "../schemas";

export async function completeOnboarding(
  onboardingData: CompleteOnboardingRequest,
) {
  const { data } = await api.post("/onboarding", onboardingData);
  return data;
}
