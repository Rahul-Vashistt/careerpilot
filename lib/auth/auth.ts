import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { db } from "@/prisma/db";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),

  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
