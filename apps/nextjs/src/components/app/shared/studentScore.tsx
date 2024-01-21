"use client";

import { motion } from "framer-motion";
import CountingScore from "../../../lib/countingScore";

export function StudentScore() {
  return (
    <div className="relative h-full w-full">
      <motion.svg
        className="absolute inset-0 m-auto"
        viewBox="0 0 100 100"
        width={100}
        height={100}
      >
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
          strokeWidth={7}
          strokeDasharray="0 1"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          cx="50"
          cy="50"
          r="35"
          fill="#fff"
          stroke="#22C55E"
        />
      </motion.svg>
      <CountingScore
        value={50}
        duration={2500}
        className="font-display absolute inset-0 mx-auto flex items-center justify-center text-4xl font-bold text-zinc-600 "
      />
    </div>
  );
}
