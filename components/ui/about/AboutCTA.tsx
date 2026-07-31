'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutCTA() {
  return (
    <section className="pb-24 pt-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-indigo-500/5 to-sky-500/10 px-8 py-16 text-center backdrop-blur-sm"
        >
          <div className="absolute left-1/2 top-0 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to level up your{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 bg-clip-text text-transparent">
              career?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Join thousands of developers who use Dev Academy to ace technical interviews and land
            roles at top companies.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-xl px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
              asChild
            >
              <Link href="/practice">
                Start Practicing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="rounded-xl px-8" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
