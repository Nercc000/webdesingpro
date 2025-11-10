import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
        "dark:border-white/10 dark:bg-white/5",
        hover && "transition-all duration-300 hover:bg-white/10 hover:shadow-xl dark:hover:bg-white/10",
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
