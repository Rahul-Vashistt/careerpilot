/*
  Warnings:

  - You are about to drop the column `goalTimeLine` on the `onboarding` table. All the data in the column will be lost.
  - You are about to drop the column `onboardingCompleted` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "onboarding" DROP COLUMN "goalTimeLine";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "onboardingCompleted";
