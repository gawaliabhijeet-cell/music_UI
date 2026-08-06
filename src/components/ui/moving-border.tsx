"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/utils/cn";

type ButtonProps = {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 2000,
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 rounded-full bg-[radial-gradient(circle,#0ea5e9_35%,transparent_70%)] opacity-80",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center rounded-[inherit] border border-slate-800 bg-slate-900/80 text-sm text-white backdrop-blur-xl",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
}

type MovingBorderProps = {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
};

function MovingBorder({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
}: Readonly<MovingBorderProps>) {
  const pathRef = useRef<SVGRectElement | null>(null);

  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const path = pathRef.current;

    if (!path) return;

    const length = path.getTotalLength();
    const pxPerMs = length / duration;

    progress.set((time * pxPerMs) % length);
  });

  const x = useTransform(progress, (value) => {
    const path = pathRef.current;
    return path ? path.getPointAtLength(value).x : 0;
  });

  const y = useTransform(progress, (value) => {
    const path = pathRef.current;
    return path ? path.getPointAtLength(value).y : 0;
  });

  const transform = useMotionTemplate`
    translateX(${x}px)
    translateY(${y}px)
    translateX(-50%)
    translateY(-50%)
  `;

  return (
    <>
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <rect
          ref={pathRef}
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          fill="none"
        />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}