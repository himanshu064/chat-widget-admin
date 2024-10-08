import type { NextAuthConfig, User } from "next-auth";
import NextAuth, { CredentialsSignin } from "next-auth";
import { parse as parseCookie } from "cookie";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "@/lib/axios";

export class InvalidLoginError extends CredentialsSignin {
  code = "InvalidLoginError";
  message = "Invalid login credentials";
}

interface AuthUser extends User {
  access_token?: string;
  refresh_token?: string;
}

const authOptions: NextAuthConfig = {
  pages: {
    signIn: "/login",
    newUser: "/register",
    signOut: "/logout",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;

        try {
          const { data, headers } = await axios.post("/auth/login", { email, password });

          // Extract the JWT token from the response headers
          const setCookieHeader = headers["set-cookie"];
          const cookieString = setCookieHeader?.find((cookie) => cookie.startsWith("jwt="));
          const parsedCookies = parseCookie(cookieString || "");
          const token = parsedCookies.jwt;

          if (!token) {
            throw new Error("JWT token not found in cookies");
          }

          const payload: AuthUser = {
            id: data._id,
            email: data.email,
            name: data.name,
            image: null,
            access_token: token,
          };

          return payload;
        } catch (error) {
          throw new InvalidLoginError();
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ account, user }) {
      if (!user) {
        return false;
      }
      // Add your signIn logic here if needed
      if (account?.provider === "google" || account?.provider === "credentials") {
        return true;
      }
      return false;
    },
    async jwt({ token, user }) {
      // Include the JWT token in the session token
      const authUser = user as AuthUser;
      if (authUser?.access_token) {
        token.accessToken = authUser.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass the JWT token to the session
      session.user.id = token.sub ?? "";
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

/**
 * Retrieves the current user from the authentication session.
 *
 * @return {Promise<User | undefined>} The current user if available, otherwise undefined.
 */
export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};

export const currentSession = async () => {
  const session = await auth();
  return session;
};
