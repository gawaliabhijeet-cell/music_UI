"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Course {
  title: string;
  description: string;
  slug: string;
}

interface TextLearnMoreProps {
  course: Course;
}

export default function TextLearnMore({ course }: TextLearnMoreProps) {
  return (
    <div className="flex grow flex-col items-center p-4 text-center sm:p-6">

      {/* Course Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          mt-4 mb-2
          text-lg font-semibold
          text-black
          sm:text-xl
          dark:text-neutral-200
        "
      >
        {course.title}
      </motion.p>

      {/* Course Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="
          grow
          text-sm leading-6
          text-neutral-600
          dark:text-neutral-400
        "
      >
        {course.description}
      </motion.p>

      {/* Learn More Button */}
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        className="mt-6"
      >
        <Link
          href={`/courses/${course.slug}`}
          className="
            group relative
            inline-flex items-center gap-2
            overflow-hidden
            rounded-xl
            border border-cyan-500/30
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-5 py-2.5
            text-sm font-semibold
            text-white
            shadow-md shadow-cyan-500/20
            transition-all duration-300

            hover:border-cyan-400
            hover:shadow-lg
            hover:shadow-cyan-500/40

            dark:from-cyan-600
            dark:to-blue-700
          "
        >
          {/* Shine */}
          <span
            className="
              absolute inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />

          {/* Text */}
          <span className="relative z-10">
            Learn More
          </span>

          {/* Arrow */}
          <motion.span
            className="relative z-10 text-base"
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}

