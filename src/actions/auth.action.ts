"use server";

import { signIn } from "@/auth";
// import { isRedirectError } from "next/dist/client/components/redirect";

export async function authenticate({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ error?: string; ok?: boolean }> {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
      // redirectTo: DEFAULT_REDIRECT,
    });
    return { ok: true };
  } catch (error) {
    // #REF: https://github.com/nextauthjs/next-auth/discussions/9389#discussioncomment-10362651
    // if (isRedirectError(error)) throw error;
    // if (error instanceof InvalidLoginError) {
    //   throw error;
    // }

    return { error: "Invalid email or password!" };
  }
  // const email = formData.get("email");
  // const password = formData.get("password");
  // await signIn("credentials", {
  //   email,
  //   password,
  //   redirect: false,
  //   // redirectTo: DEFAULT_REDIRECT,
  // });
}
