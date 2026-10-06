// features/onboarding/services/onboarding.service.ts

import { db } from "@/prisma/db";
import type { CompleteOnboardingRequest } from "../schemas";

export async function completeOnboarding(
  userId: string,
  data: CompleteOnboardingRequest,
) {
  return db.onboarding.upsert({
    where: {
      userId,
    },
    create: {
      userId,
      currentStatus: data.currentStatus,
      targetRole: data.targetRole,
      skills: data.skills ?? [],
      experienceTypes: data.experienceTypes,
      projectCount: data.projectCount,
      relevantExperience: data.relevantExperience,
      mainGoal: data.mainGoal,
      weeklyTime: data.weeklyTime,
      completed: true,
    },
    update: {
      currentStatus: data.currentStatus,
      targetRole: data.targetRole,
      skills: data.skills ?? [],
      experienceTypes: data.experienceTypes,
      projectCount: data.projectCount,
      relevantExperience: data.relevantExperience,
      mainGoal: data.mainGoal,
      weeklyTime: data.weeklyTime,
      completed: true,
    },
  });
}
