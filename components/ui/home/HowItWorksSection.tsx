"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Trophy } from "lucide-react";

const steps = [
  {
    title: "Learn",
    description:
      "Work through structured tutorials covering JavaScript, React, Node.js, DSA, and System Design.",
    icon: BookOpen,
  },
  {
    title: "Practice",
    description:
      "Sharpen your skills with MCQs, output-based challenges, and hands-on coding problems.",
    icon: Code2,
  },
  {
    title: "Get Hired",
    description:
      "Prepare with real interview questions and company-wise guides to crack your next interview.",
    icon: Trophy,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-semibold text-[#FBBF24]">How It Works</p>

          <h2 className="mt-2 text-4xl font-bold">
            Your Path to Becoming a Developer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A simple, structured way to go from learning the fundamentals to
            landing your next role.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#FBBF24] hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#FBBF24]/10">
                  <Icon className="h-7 w-7 text-[#FBBF24]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
