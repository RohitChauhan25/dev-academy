'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, BrainCircuit, Code2, Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const technologies = [
  'JavaScript',
  'React',
  'Node.js',
  'Java',
  'Python',
  'Docker',
  'AWS',
  'SQL',
  'MongoDB',
  'System Design',
  'Machine Coding',
  'DSA',
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
      <div className="absolute left-1/2 top-10 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="absolute right-0 top-0 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <Badge
              variant="outline"
              className="rounded-full border-orange-500/40 bg-orange-500/10 px-5 py-2 text-orange-300"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              AI Powered Technical Interview Platform
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-8 text-5xl font-black leading-tight md:text-7xl"
          >
            Master
            <span className="bg-gradient-to-r from-orange-500 via-fuchsia-400 to-orange-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              {' '}
              Technical Interviews
            </span>
            <br />
            Faster With AI
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl"
          >
            Prepare for Frontend, Backend, Full Stack, DSA, System Design, Machine Coding, and
            Behavioral interviews using AI-powered mock interviews, curated roadmaps,
            company-specific questions, and personalized learning paths.
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
              className="rounded-xl px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
              asChild
            >
              <Link href="/practice">
                Start Practicing
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-8 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/roadmaps">Explore Roadmaps</Link>
            </Button>
          </motion.div>
          {/* Stats */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            {[
              {
                icon: BrainCircuit,
                color: 'text-violet-400',
                text: 'AI Mock Interviews',
              },
              {
                icon: Code2,
                color: 'text-cyan-400',
                text: '5000+ Questions',
              },
              {
                icon: Building2,
                color: 'text-green-400',
                text: '250+ Companies',
              },
              {
                icon: CheckCircle2,
                color: 'text-yellow-400',
                text: '50K+ Learners',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.text}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 250,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card/70 px-5 py-3 backdrop-blur-md"
                >
                  <Icon className={`h-5 w-5 ${item.color}`} />
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              );
            })}
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
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-violet-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/20"
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
