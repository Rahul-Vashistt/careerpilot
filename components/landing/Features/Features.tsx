"use client";

import { features } from "./features";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Everything in one place
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Stop managing your career across ten different tabs.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            CareerPilot brings the entire job search process into one
            workspace.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-background md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group bg-surface p-7 transition-colors duration-300 hover:bg-surface-hover"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-muted text-primary transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/10">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}