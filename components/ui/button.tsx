import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-x-1 justify-center whitespace-nowrap rounded-full text-paragraph-sm sm:text-paragraph-md text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950",
  {
    variants: {
      variant: {
        default:
          "gradient-blue drop-shadow-md hover:rotate-[-2deg] active:scale-90 transition-all duration-300 border-[3px] hover:bg-[#A4D5F2] border-white text-zinc-50",
        icon: "bg-app-blue border-2 border-white drop-shadow-md hover:-translate-y-1.5 hover:rotate-[8deg] active:-translate-y-2 transition-transform duration-300 ease-in-out",
      },
      size: {
        default: "px-4 py-1 sm:py-1.5",
        icon: "rounded-[12px] p-2",
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
