import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "green" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}
export function Button({
  variant = "green",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "btn inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 active:scale-95 cursor-pointer";
  const variantClasses = {
    green:
      "btn-green bg-[#1e3a5f] text-white hover:bg-[#3a6ea5] border border-transparent shadow-lg shadow-green-900/20",
    gold: "btn-gold bg-[#c9a227] text-white hover:bg-[#f5d24f] border border-transparent shadow-lg shadow-yellow-900/10",
    outline: "btn-outline border border-white/20 text-white hover:bg-white/5",
    ghost: "btn-ghost text-white hover:bg-white/5",
  };
  const sizeClasses = {
    sm: "btn-sm px-4 py-1.5 text-xs",
    md: "btn-md px-6 py-2.5 text-sm",
    lg: "btn-lg px-8 py-3.5 text-base",
  };
  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {" "}
        {children}{" "}
      </Link>
    );
  }
  return (
    <button className={combinedClasses} {...props}>
      {" "}
      {children}{" "}
    </button>
  );
}
