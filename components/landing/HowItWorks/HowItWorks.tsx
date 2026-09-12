"use client";

import { motion, type Variants } from "motion/react";

import { steps } from "./HowItWorksSteps";

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stepsContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.18,
    },
  },
};

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(10px)",
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

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-y border-border bg-surface"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-5xl">
            One system. Three simple steps.
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
            Keep your entire job search organized, from the first application
            to the final follow-up.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stepsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mt-16 grid gap-6 md:grid-cols-3 md:gap-8 lg:mt-20"
        >
          {/* Desktop connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-border md:block" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative rounded-2xl border border-border bg-background p-7 transition-shadow duration-300 hover:shadow-sm sm:p-8"
            >
              {/* Step number */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-primary shadow-sm">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-text-primary">
                {step.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-muted sm:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}