"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

import {
  type ReactNode,
  type MouseEvent,
  useRef,
} from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;

  /*
   * 0.15 = subtle
   * 0.25 = noticeable
   * 0.35+ = aggressive
   */
  strength?: number;
};

export default function Magnetic({
  children,
  className,
  strength = 0.15,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  /*
   * Spring prevents the button from snapping around.
   */
  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  });

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const element = ref.current;

    if (!element) return;

    const rect =
      element.getBoundingClientRect();

    const mouseX =
      event.clientX - rect.left;

    const mouseY =
      event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const distanceX =
      mouseX - centerX;

    const distanceY =
      mouseY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}