import { cn } from "@/lib/cn";
import React from "react";

interface IProps {
  variant?: "success" | "warning" | "error" | "info";
  border?: "top" | "left" | "right" | "bottom";
  title: string;
  description?: string;
}

const Alert = ({ border = "left", variant = "error", title, description }: IProps) => {
  return (
    <div className="space-y-5">
      <div
        className={cn("bg-teal-50 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30", {
          "border-t-2": border === "top",
          "border-l-2": border === "left",
          "border-r-2": border === "right",
          "border-b-2": border === "bottom",

          "bg-teal-50 border-teal-500 dark:bg-teal-800/30": variant === "success",
          "bg-yellow-50 border-yellow-500 dark:bg-yellow-800/30": variant === "warning",
          "bg-red-50 border-red-500 dark:bg-red-800/30": variant === "error",
          "bg-blue-50 border-blue-500 dark:bg-blue-800/30": variant === "info",
        })}
        role="alert"
        tabIndex={-1}
        aria-labelledby="hs-bordered-success-style-label"
      >
        <div className="flex">
          <div className="shrink-0">
            <span
              className={cn(
                "inline-flex justify-center items-center size-8 rounded-full border-4",
                {
                  "border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400":
                    variant === "success",
                  "border-yellow-100 bg-yellow-200 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-800 dark:text-yellow-400":
                    variant === "warning",
                  "border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400":
                    variant === "error",
                  "border-blue-100 bg-blue-200 text-blue-800 dark:border-blue-900 dark:bg-blue-800 dark:text-blue-400":
                    variant === "info",
                },
              )}
            >
              {variant === "success" && (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              )}
              {variant === "error" && (
                <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              )}
            </span>
          </div>
          <div className="ms-3">
            <h3 className="text-gray-800 font-semibold dark:text-white">{title}</h3>
            {description && (
              <p className="text-sm text-gray-700 dark:text-neutral-400">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
