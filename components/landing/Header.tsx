"use client";

import { motion } from "motion/react";

import Link from "next/link";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
];

export default function Header() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        y: -20,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: 0.75,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-[96%] items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <motion.a
          href="#"
          initial={{
            opacity: 0,
            filter: "blur(6px)",
            y: -8,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="font-geist text-2xl font-bold tracking-tighter">
            CareerPilot
          </span>
        </motion.a>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{
                opacity: 0,
                filter: "blur(6px)",
                y: -8,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.25 + index * 0.07,
                ease: "easeOut",
              }}
              className="text-text-secondary transition-all duration-100 hover:font-semibold hover:tracking-wide hover:text-text-primary"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(6px)",
            y: -8,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.55,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="flex items-center gap-3"
        >
          <Link
            href="/sign-in"
            className="hidden px-3 py-2 text-sm font-medium text-muted transition hover:text-foreground sm:block"
          >
            Sign in
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
          >
            Get started
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}