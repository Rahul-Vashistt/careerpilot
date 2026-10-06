"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

import TrailDot from "./TrailDot";

type CursorVariant =
  | "default"
  | "link"
  | "magnetic"
  | "text";

const TRAIL_LENGTH = 8;

export default function CustomCursor() {
  const [variant, setVariant] =
    useState<CursorVariant>("default");

  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  /*
   * Fast inner dot
   */
  const dotX = useSpring(mouseX, {
    stiffness: 1200,
    damping: 60,
    mass: 0.15,
  });

  const dotY = useSpring(mouseY, {
    stiffness: 1200,
    damping: 60,
    mass: 0.15,
  });

  /*
   * Slower outer ring
   */
  const ringX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
    mass: 0.7,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
    mass: 0.7,
  });

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    /*
     * Hide native cursor everywhere while this cursor
     * is active.
     */
    const previousCursor =
      document.documentElement.style.cursor;

    document.documentElement.style.cursor = "none";

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setVisible(true);

      const target = (
        event.target as HTMLElement
      ).closest("[data-cursor]") as HTMLElement | null;

      if (!target) {
        setVariant("default");
        return;
      }

      const cursorType = target.dataset.cursor;

      switch (cursorType) {
        case "link":
          setVariant("link");
          break;

        case "magnetic":
          setVariant("magnetic");
          break;

        case "text":
          setVariant("text");
          break;

        default:
          setVariant("default");
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      document.documentElement.style.cursor =
        previousCursor;

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, [mouseX, mouseY]);

  if (!enabled || !visible) {
    return null;
  }

  const isInteractive =
    variant === "link" ||
    variant === "magnetic";

  const ringSize =
    variant === "magnetic"
      ? 58
      : variant === "link"
        ? 44
        : variant === "text"
          ? 28
          : 32;

  return (
    <>
      {/* TRAIL */}

      {Array.from(
        { length: TRAIL_LENGTH },
        (_, index) => (
          <TrailDot
            key={index}
            index={index}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        )
      )}

      {/* OUTER RING */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          rounded-full
          border
          border-white
          mix-blend-difference
        "
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: ringSize,
          height: ringSize,

          opacity:
            variant === "text"
              ? 0.4
              : 0.85,

          scale:
            variant === "magnetic"
              ? 1.05
              : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 24,
          mass: 0.5,
        }}
      />

      {/* INNER DOT */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          rounded-full
          bg-white
          mix-blend-difference
        "
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:
            variant === "magnetic"
              ? 5
              : variant === "text"
                ? 3
                : 6,

          height:
            variant === "magnetic"
              ? 5
              : variant === "text"
                ? 3
                : 6,

          scale:
            isInteractive
              ? 0.85
              : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
      />
    </>
  );
}