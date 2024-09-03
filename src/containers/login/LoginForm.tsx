"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import Alert from "@/components/@preline/Alert";

const LoginForm = () => {
  const sp = useSearchParams();
  const isError = (sp.get("error") || "") !== "";
  const errorMessage = sp.get("message") || "";

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setEmailError] = React.useState(isError);
  const [passwordError, setPasswordError] = React.useState(isError);

  return (
    <>
      {(emailError || passwordError) && <Alert title="Error" description={errorMessage} />}
      <div>
        <label
          htmlFor="email"
          className={cn("block text-sm mb-2 dark:text-white", {
            "text-red-500": emailError,
          })}
        >
          Email address
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className={cn(
              "py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600",
              {
                "border-red-500 focus:border-red-500": emailError,
              },
            )}
            required
            aria-describedby="email-error"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailError(email.length === 0)}
          />
          <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
            <svg
              className="size-5 text-red-500"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </div>
        </div>
        <p className="hidden text-xs text-red-600 mt-2" id="email-error">
          Please include a valid email address so we can get back to you
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <label
            htmlFor="password"
            className={cn("block text-sm mb-2 dark:text-white", {
              "text-red-500": passwordError,
            })}
          >
            Password
          </label>
          <a
            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
            href="../examples/html/recover-account.html"
          >
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <input
            type="password"
            id="password"
            name="password"
            className={cn(
              "py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600",
              {
                "border-red-500 focus:border-red-500": passwordError,
              },
            )}
            required
            aria-describedby="password-error"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordError(password.length === 0)}
          />
          <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
            <svg
              className="size-5 text-red-500"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </div>
        </div>
        <p className="hidden text-xs text-red-600 mt-2" id="password-error">
          8+ characters required
        </p>
      </div>

      <div className="flex items-center">
        <div className="flex">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
        </div>
        <div className="ms-3">
          <label htmlFor="remember-me" className="text-sm dark:text-white">
            Remember me
          </label>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
