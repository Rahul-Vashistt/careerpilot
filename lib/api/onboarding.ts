import { api } from "./axios";

type PropsOnboarding = {
  currentStatus: string;
  targetRole: string;
  skills?: string[];
  mainGoal?: string;
  weeklyTime?: string;
  goalTimeline: string;
};

export async function completeOnboarding(onboardingData: PropsOnboarding) {
  const { data } = await api.post("/onboarding",onboardingData);
  return data;
}
