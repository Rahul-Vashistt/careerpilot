"use client";

import { motion } from "motion/react";

import ProductShowcase from "./ProductShowcase";

import { GoArrowRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";
import MagneticText from "@/components/Animation/TextAnimation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 career-grid" />

      <div className="pointer-events-none absolute left-[42%] top-20 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto grid max-w-[90%] items-center 2xl:gap-0 gap-10 px-6 pb-24 pt-20 xl:grid-cols-[0.95fr_1.05fr] justify-center xl:px-8 xl:pb-32 xl:pt-28">
        {/* Left */}
        <div className="max-w-2xl xl:mb-0 mb-20">
          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(8px)",
              y: 15,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-sm text-muted shadow-sm backdrop-blur"
          >
            <motion.span
              initial={{
                opacity: 0,
                filter: "blur(8px)",
                y: 15,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}

              className="h-1.5 w-1.5 rounded-full bg-success"
            />
            One workspace for your career
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              filter: "blur(12px)",
              y: 30,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl font-semibold tracking-[-0.045em] text-text-primary sm:text-6xl xl:text-[4.5rem] xl:leading-[0.98]"
          >
            Your career has a direction.
            <span className="mt-2 block">
              Let{" "}
              <MagneticText
                text="CareerPilot"
                className="font-serif font-normal text-[1.05em] italic text-primary cursor-default"
              />{" "}
              guide it.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              filter: "blur(8px)",
              y: 20,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl"
          >
            Discover opportunities, tailor your applications, track your
            progress, and prepare for interviews — all from one career
            workspace.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(8px)",
              y: 18,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-col flex-wrap items-center gap-3 lg:flex-row"
          >
            <Link
              href="/sign-up"
              className="group inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-colors duration-300 hover:bg-primary-hover lg:w-auto lg:rounded-lg lg:py-3.5"
            >
              Get Started
              <span className="relative flex h-5 w-0 items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-5">
                <GoArrowRight
                  className="
                    absolute left-0 h-5 w-5
                    -translate-x-3 opacity-0
                    transition-all duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />
              </span>
            </Link>

            <a
              href="https://github.com/Rahul-Vashistt/careerpilot"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-center text-sm font-semibold text-foreground transition hover:border-border-hover hover:bg-surface-hover lg:w-auto lg:rounded-lg lg:py-3.5"
            >
              <span className="mr-0 flex w-0 -translate-x-2 overflow-hidden opacity-0 transition-all duration-300 group-hover:mr-2 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100">
                <FaGithub size={20} />
              </span>
              View GitHub
            </a>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{
              opacity: 0,
              filter: "blur(6px)",
              y: 10,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.58,
              ease: "easeOut",
            }}
            className="mt-4 text-xs text-muted-foreground"
          >
            From first application to next opportunity.
          </motion.p>
        </div>

        {/* Right — Product */}
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(14px)",
            scale: 0.97,
            x: 25,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative xl:translate-x-4 min-w-0"
        >
          <ProductShowcase />
        </motion.div>
      </div>
    </section>
  );
}
