"use client";

import { useTheme } from "next-themes";
import { MouseEvent, useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ANIMATION_DURATION = 500;

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const isDark = resolvedTheme === "dark";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    if (!document.startViewTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: ANIMATION_DURATION,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}
      className="
        group relative inline-flex h-9 w-9 items-center justify-center
        rounded-full border border-border
        bg-surface text-muted
        shadow-sm
        transition-all duration-200
        hover:border-border-hover
        hover:bg-surface-hover
        hover:text-foreground
        focus:outline-none
        focus:ring-2
        focus:ring-primary/30
      "
    >
      {resolvedTheme === "dark" ? (
        <LuSun
          size={17}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:rotate-12"
        />
      ) : (
        <LuMoon
          size={17}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:-rotate-12"
        />
      )}
    </button>
  );
}
