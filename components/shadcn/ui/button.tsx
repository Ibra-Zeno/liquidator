"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded bg-primary text-xs font-medium tracking-wide leading-normal text-white transition duration-150 ease-in-out hover:bg-primary/90 active:bg-primary/75 motion-reduce:transition-none",
        accent: "bg-accent text-white hover:bg-accent/90 rounded",
        outline:
          "border border-input bg-background rounded hover:bg-secondary hover:text-accent-foreground",
        secondary:
          "bg-secondary text-text font-medium rounded hover:bg-secondary/80",
        ghost: "hover:bg-secondary/75 hover:text-accent-foreground rounded",
        link: "text-primary italic underline-offset-4 hover:underline rounded",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded px-3",
        lg: "h-12 rounded px-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
