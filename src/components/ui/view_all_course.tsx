"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { JSX } from "react";

export default function ViewAllCourse(): JSX.Element {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="inline-block"
    >
      <Link
        href="/courses"
        className="
      group relative inline-flex items-center gap-2
      overflow-hidden rounded-xl
      border border-neutral-700/60
      bg-neutral-950
      px-6 py-3
      font-medium text-white
      shadow-lg shadow-black/20
      transition-all duration-300
      hover:border-cyan-400/60
      hover:shadow-xl hover:shadow-cyan-500/20
    "
      >
        {/* Animated background */}
        <span
          className="
        absolute inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
        transition-transform duration-700
        group-hover:translate-x-full
      "
        />

        {/* Glow */}
        <span
          className="
        absolute -inset-1 -z-10
        rounded-xl
        bg-cyan-500/20
        opacity-0 blur-xl
        transition-opacity duration-300
        group-hover:opacity-100
      "
        />

        <span className="relative z-10">View All Courses</span>

        {/* Arrow */}
        <motion.span
          className="relative z-10 text-cyan-400"
          animate={{ x: [0, 4, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  );
}

