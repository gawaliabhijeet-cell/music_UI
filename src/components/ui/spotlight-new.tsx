"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface SpotlightProps {
  size?: number;
  color?: string;
  blur?: number;
  opacity?: number;
  followMouse?: boolean;
}

export  function Spotlight({
  size = 500,
  color = "rgba(59,130,246,0.35)",
  blur = 120,
  opacity = 1,
  followMouse = true,
}: Readonly<SpotlightProps>) {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
  });

  useEffect(() => {
    if (!followMouse) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY, size, followMouse]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Mouse Spotlight */}
      <motion.div
        style={{
          x,
          y,
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          opacity,
        }}
        className="absolute rounded-full"
      />

      {/* Left Beam */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          rotate: [-45, -40, -45],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0"
        style={{
          width: 600,
          height: 1600,
          background:
            "linear-gradient(to bottom, rgba(59,130,246,.25), transparent)",
          filter: "blur(120px)",
        }}
      />

      {/* Right Beam */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          rotate: [45, 40, 45],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0"
        style={{
          width: 600,
          height: 1600,
          background:
            "linear-gradient(to bottom, rgba(168,85,247,.25), transparent)",
          filter: "blur(120px)",
        }}
      />

      {/* Floating Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.15), transparent 70%)",
          filter: "white(100px)",
        }}
      />
    </div>
  );
}