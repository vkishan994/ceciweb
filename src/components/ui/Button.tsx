import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    const baseStyle =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    let variantStyle = "";

    if (variant === "primary") {
      variantStyle =
        "bg-primary text-white hover:bg-[#1a4b96] hover:shadow-premium hover:-translate-y-0.5 active:translate-y-0 h-[56px] px-8 rounded-button";
    } else if (variant === "secondary") {
      variantStyle =
        "bg-transparent border-2 border-primary text-primary hover:bg-[rgba(18,58,120,0.05)] hover:shadow-premium hover:-translate-y-0.5 active:translate-y-0 h-[56px] px-8 rounded-button";
    } else if (variant === "tertiary") {
      variantStyle =
        "bg-transparent text-primary hover:text-secondary py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-secondary after:transition-all after:duration-300";
    }

    return (
      <button
        ref={ref}
        className={`${baseStyle} ${variantStyle} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
