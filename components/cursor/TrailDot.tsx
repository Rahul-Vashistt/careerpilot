"use client";

import {
  motion,
  useSpring,
  type MotionValue,
} from "motion/react";

type Props = {
  index: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

export default function TrailDot({
  index,
  mouseX,
  mouseY,
}: Props) {
  const x = useSpring(mouseX, {
    stiffness: 110 - index * 8,
    damping: 22,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 110 - index * 8,
    damping: 22,
    mass: 0.4,
  });

  const size = Math.max(
    3,
    9 - index * 0.8
  );

  const opacity = Math.max(
    0.025,
    0.16 - index * 0.017
  );

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9996]
        rounded-full
        bg-white
        mix-blend-difference
      "
      style={{
        x,
        y,
        width: size,
        height: size,
        opacity,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}