'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LearnHero() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-background" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="absolute right-0 top-10 -z-10 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Badge
              variant="outline"
              className="rounded-full border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-400"
            >
              📚 Free Developer Tutorials
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Learn{' '}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Modern Technologies
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground"
          >
            Explore free tutorials on JavaScript, TypeScript, React, Next.js,
            Node.js, HTML, CSS, Git, DSA, System Design and more. Learn with
            practical examples and interview-focused content.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild>
              <Link href="/learn/javascript">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#technologies">Browse Technologies</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
