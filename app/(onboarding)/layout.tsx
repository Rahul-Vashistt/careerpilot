import { auth } from "@/lib/auth/auth";
import { db } from "@/prisma/db";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function OnboardingLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (!session) {
        redirect("/sign-in")
    }

    const onboarding = await db.onboarding.findUnique({
        where: {
            userId: session.user.id,
        },
    })

    if (onboarding?.completed) {
        redirect("/dashboard")
    }

    return children;
    
}