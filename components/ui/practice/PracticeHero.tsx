'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Trophy } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function PracticeHero({ javascriptQuestionCount }: { javascriptQuestionCount: number }) {
  const stats = [
    {
      icon: Code2,
      title: 'JavaScript Available Now',
    },
    {
      icon: BrainCircuit,
      title: `${javascriptQuestionCount}+ Practice Questions`,
    },
    {
      icon: Trophy,
      title: 'Instant Scoring',
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="absolute right-0 top-10 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Badge
              variant="outline"
              className="rounded-full border-violet-500/30 bg-violet-500/10 px-4 py-2 text-violet-400"
            >
              🧠 Test What You've Learned
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Practice{' '}
            <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Coding Questions
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground"
          >
            Pick a technology, choose a topic, and test yourself with real practice questions
            pulled straight from the tutorials — with instant scoring and correct answers.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border bg-card px-5 py-3 transition-all hover:-translate-y-1 hover:border-violet-500"
                >
                  <Icon className="h-5 w-5 text-violet-500" />

                  <span className="font-medium">{item.title}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
