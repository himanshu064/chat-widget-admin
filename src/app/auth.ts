import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const config = {
  trustHost: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV !== "production",
  // skipCSRFCheck: skipCSRFCheck,
  callbacks: {
    // eslint-disable-next-line no-unused-vars
    // user, account, profile, email, credentials
    async signIn({ account }) {
      // allow OAuth without any verification
      if (account?.provider !== "credentials") {
        return true;
      }

      return false;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    // eslint-disable-next-line no-unused-vars
    // account, profile
    async jwt({ token, user }) {
      // console.log(
      //   {
      //     token,
      //     user,
      //     account,
      //     profile,
      //   },
      //   "inside jwt callback",
      // );
      return { ...token, ...user };
    },
    // eslint-disable-next-line no-unused-vars
    // user
    async session({ session, token }) {
      // token is the whatever jwt function returns
      // console.log(
      //   {
      //     session,
      //     user,
      //     token,
      //   },
      //   "inside session callback",
      // );
      session.user.id = token.sub ?? "";
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
