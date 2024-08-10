import React from "react";

interface IProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IProps) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="container max-w-md mx-auto">{children}</div>
    </div>
  );
};

export default AuthLayout;
