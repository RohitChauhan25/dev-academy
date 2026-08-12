'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, ShieldCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const values = [
  {
    icon: Target,
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
    title: 'Focused Learning',
    description:
      'Every piece of content is curated to be practical and interview-relevant — no fluff, no filler.',
  },
  {
    icon: Lightbulb,
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
    title: 'Clear Explanations',
    description:
      'Complex topics broken down into digestible concepts with real-world examples and code snippets.',
  },
  {
    icon: Users,
    color: 'text-sky-400',
    bg: 'bg-sky-500/10 border-sky-500/20',
    title: 'Community First',
    description:
      'A growing community of developers helping each other learn, share, and land their dream roles.',
  },
  {
    icon: ShieldCheck,
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
    title: 'Always Free',
    description:
      'Core content will always be free. Quality interview prep should not depend on your wallet.',
  },
];

export default function AboutMission() {
  return (
    <section className="pb-20 pt-4">
      <div className="container mx-auto px-6">
        {/* Mission statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our{' '}
            <span className="bg-gradient-to-r from-[#FBBF24] via-[#e7c97c] to-[#6366F1] bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            To make high-quality technical interview preparation accessible to every developer —
            regardless of their background, location, or budget. We believe the best developers
            shouldn&apos;t be filtered out because they couldn&apos;t afford premium prep resources.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
          {values.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } } }}
                className={`rounded-2xl border p-6 ${item.bg} backdrop-blur-sm`}
              >
                <div className={`inline-flex rounded-xl border p-3 ${item.bg}`}>
                  <Icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
