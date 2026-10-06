import { NextResponse } from "next/server";

import { auth } from "@/lib/auth/auth";
import { completeOnboarding } from "@/features/onboarding/services/onboarding.service";
import { completeOnboardingSchema } from "@/features/onboarding/schemas";
import handleError from "@/lib/errors/handleError";

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const parsed = completeOnboardingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid onboarding data",
          details: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const onboarding = await completeOnboarding(session.user.id, parsed.data);

    return NextResponse.json(onboarding, { status: 200 });
  } catch (err) {
    return handleError(err, "Failed to complete onboarding");
  }
}
