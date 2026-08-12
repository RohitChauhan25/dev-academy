'use client';

import { motion } from 'framer-motion';
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

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="absolute right-0 top-10 -z-10 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Badge
              variant="outline"
              className="rounded-full border-primary/30 bg-primary/10 px-4 py-2 text-primary"
            >
              👋 Let&apos;s Talk
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Get in{' '}
            <span className="bg-gradient-to-r from-[#FBBF24] via-[#e7c97c] to-[#6366F1] bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            Questions, feedback, or found something broken? Send a message or reach out directly —
            we read everything.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
