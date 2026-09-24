import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";

import client from "./mongodbClient";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    Resend({
      from: "Generate-Invoice <onboarding@resend.dev>",
    }),
  ],
  pages: {
    error: "/login",
    verifyRequest: "/verify-email",
    signIn: "/login",
  },
});
