-- CreateTable
CREATE TABLE "onboarding" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "currentStatus" TEXT NOT NULL,
    "targetRole" TEXT NOT NULL,
    "skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "mainGoal" TEXT,
    "weeklyTime" TEXT,
    "goalTimeLine" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "onboarding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "onboarding_userId_key" ON "onboarding"("userId");

-- AddForeignKey
ALTER TABLE "onboarding" ADD CONSTRAINT "onboarding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
