import React from "react";
import { cn } from "@/lib/cn";
import Spinner from "../Spinner";

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  spinnerSize?: number;
}

const LoadingButton = ({
  loading = false,
  className = "",
  children,
  ...props
}: LoadingButtonProps) => {
  return (
    <button
      {...props}
      disabled={loading}
      className={cn(
        "py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none relative",
        className,
      )}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6">
            <Spinner />
          </div>
        </div>
      )}
      <span
        className={cn({
          "opacity-0": loading,
          "transition-opacity": true,
        })}
      >
        {children}
      </span>
    </button>
  );
};

export default LoadingButton;
