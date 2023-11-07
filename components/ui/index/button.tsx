"use client";

import { Button } from "@/components/shadcn/ui/button";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const ButtonIndex: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <Button
      className={`mt-4 inline-flex items-center bg-blue-600 px-6 font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 ${className}`}
    >
      {children}
    </Button>
  );
};
export default ButtonIndex;
