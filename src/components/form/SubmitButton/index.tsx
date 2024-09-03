"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import LoadingButton from "@/components/@preline/LoadingButton";
import { cn } from "@/lib/cn";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const SubmitButton = ({ children, className = "" }: IProps) => {
  const { pending } = useFormStatus();
  return (
    <LoadingButton
      loading={pending}
      type="submit"
      className={cn(
        "py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none",
        className,
      )}
    >
      {children}
    </LoadingButton>
  );
};

export default SubmitButton;
