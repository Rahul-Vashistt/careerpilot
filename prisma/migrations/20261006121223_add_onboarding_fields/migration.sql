-- AlterTable
ALTER TABLE "onboarding" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "experienceTypes" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "projectCount" TEXT,
ADD COLUMN     "relevantExperience" TEXT,
ALTER COLUMN "goalTimeLine" DROP NOT NULL;
