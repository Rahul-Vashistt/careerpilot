"use client";

import { motion } from "motion/react";

export default function MagneticText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          whileHover={{
            y: 18,
            rotate: index % 2 === 0 ? 8 : -8,
            scale: 0.92,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 12,
            mass: 0.5,
          }}
          className="inline-block"
          style={{
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
