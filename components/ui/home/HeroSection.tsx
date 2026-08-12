"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const technologies = [
  "JavaScript",
  "React",
  "Node.js",
  "Java",
  "Python",
  "SQL",
  "MongoDB",
  "System Design",
  "Machine Coding",
  "DSA",
];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  }),
};
export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-background" />

      {/* Glow */}
      {/* <div className="absolute left-1/2 top-10 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#FBBF24]/20 blur-[150px]" />

      <div className="absolute right-0 top-0 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" /> */}

      {/* Grid */}
      {/* <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:42px_42px]" /> */}

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <Badge
              variant="outline"
              className="rounded-full dark:border-[#FBBF24]/40 dark:bg-[#FBBF24]/10 px-5 py-2 dark:text-[#FBBF24] border-[#FBBF24]/40 bg-[#FBBF24]/10 text-[#000000]"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Learn • Practice • Crack Interviews
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
          >
            Learn{" "}
            <span className="bg-gradient-to-r from-[#FBBF24] via-[#6366F1] to-[#6366F1] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              Modern Technologies
            </span>
            <br />
            <span className="text-foreground">Build Skills. Get Hired.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl"
          >
            Learn JavaScript, TypeScript, React, Next.js, Node.js, HTML, CSS,
            DSA, System Design, and more through structured tutorials, interview
            questions, MCQs, output-based challenges, and company-wise
            preparation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="rounded-xl px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FBBF24]/30"
              asChild
            >
              <Link href="/practice">
                Start Practicing
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Tech Tags */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                variants={fadeUp}
                custom={index * 0.05}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.15,
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  y: -6,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-[#FBBF24] hover:shadow-lg hover:shadow-violet-500/20"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
