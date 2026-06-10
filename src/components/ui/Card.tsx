import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", hoverEffect = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white rounded-card p-8 shadow-premium ${
          hoverEffect
            ? "hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 ease-out"
            : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
