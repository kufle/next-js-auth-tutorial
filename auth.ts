import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";
import authConfig from "./auth.config" 
import { db } from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({token}) {
      console.log(token);
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  ...authConfig,
});