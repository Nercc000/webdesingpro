"use client";

import { cn } from "@/lib/utils";

interface BorderTrailProps {
  className?: string;
  duration?: number;
}

export function BorderTrail({
  className,
  duration = 6,
}: BorderTrailProps) {
  // Calculate the perimeter-based delays for continuous animation
  const totalDuration = duration;
  
  return (
    <>
      {/* Top border trail */}
      <div className={cn("pointer-events-none absolute left-0 top-0 h-[3px] w-full overflow-hidden", className)}>
        <div
          className="absolute left-0 top-0 h-full w-[150px] bg-gradient-to-r from-transparent via-primary/80 to-transparent blur-sm"
          style={{
            animation: `slide-right ${totalDuration}s linear infinite`,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
          }}
        />
      </div>
      
      {/* Right border trail */}
      <div className={cn("pointer-events-none absolute right-0 top-0 h-full w-[3px] overflow-hidden", className)}>
        <div
          className="absolute right-0 top-0 h-[150px] w-full bg-gradient-to-b from-transparent via-primary/80 to-transparent blur-sm"
          style={{
            animation: `slide-down ${totalDuration}s linear infinite`,
            animationDelay: `${totalDuration * 0.25}s`,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
          }}
        />
      </div>
      
      {/* Bottom border trail */}
      <div className={cn("pointer-events-none absolute bottom-0 left-0 h-[3px] w-full overflow-hidden", className)}>
        <div
          className="absolute bottom-0 right-0 h-full w-[150px] bg-gradient-to-r from-transparent via-primary/80 to-transparent blur-sm"
          style={{
            animation: `slide-left ${totalDuration}s linear infinite`,
            animationDelay: `${totalDuration * 0.5}s`,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
          }}
        />
      </div>
      
      {/* Left border trail */}
      <div className={cn("pointer-events-none absolute bottom-0 left-0 h-full w-[3px] overflow-hidden", className)}>
        <div
          className="absolute bottom-0 left-0 h-[150px] w-full bg-gradient-to-b from-transparent via-primary/80 to-transparent blur-sm"
          style={{
            animation: `slide-up ${totalDuration}s linear infinite`,
            animationDelay: `${totalDuration * 0.75}s`,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
          }}
        />
      </div>
    </>
  );
}
