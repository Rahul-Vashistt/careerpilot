import { z } from "zod";

export const completeOnboardingSchema = z.object({
  currentStatus: z.string().min(1),
  targetRole: z.string().min(1),
  skills: z.array(z.string()).optional(),
  experienceTypes: z.array(z.string()).default([]),
  projectCount: z.string().optional(),
  relevantExperience: z.string().optional(),
  mainGoal: z.string().optional(),
  weeklyTime: z.string().optional(),
});

export type CompleteOnboardingRequest = z.infer<
  typeof completeOnboardingSchema
>;
