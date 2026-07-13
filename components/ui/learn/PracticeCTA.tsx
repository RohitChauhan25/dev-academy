'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code2, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PracticeCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border bg-card p-10 lg:p-16"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/5 via-violet-500/10 to-cyan-500/5" />

          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500">
              🚀 Ready for the Next Step?
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Finished Learning?
              <br />
              Now Put Your Knowledge into Practice.
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Reinforce what you've learned with MCQs, output-based questions, coding challenges,
              and interview questions designed to improve your problem-solving skills.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border bg-background p-5">
                <Brain className="mx-auto h-8 w-8 text-blue-500" />
                <h3 className="mt-3 font-semibold">MCQs</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Test your understanding with topic-wise multiple-choice questions.
                </p>
              </div>

              <div className="rounded-xl border bg-background p-5">
                <Code2 className="mx-auto h-8 w-8 text-violet-500" />
                <h3 className="mt-3 font-semibold">Output Questions</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Predict program output and strengthen your JavaScript skills.
                </p>
              </div>

              <div className="rounded-xl border bg-background p-5">
                <Briefcase className="mx-auto h-8 w-8 text-cyan-500" />
                <h3 className="mt-3 font-semibold">Interview Questions</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prepare with beginner to advanced interview questions from top technologies.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/practice">
                  Start Practicing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="/interview">Explore Interview Questions</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
