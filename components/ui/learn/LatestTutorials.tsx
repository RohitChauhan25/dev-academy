'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

const tutorials = [
  {
    title: 'Introduction to JavaScript',
    description: 'Learn JavaScript fundamentals with simple explanations and examples.',
    category: 'JavaScript',
    level: 'Beginner',
    readTime: '8 min read',
    href: '/learn/javascript/introduction',
  },
  {
    title: 'Understanding React Components',
    description: 'Learn how components work and build reusable UI in React.',
    category: 'React',
    level: 'Beginner',
    readTime: '10 min read',
    href: '/learn/react/components',
  },
  {
    title: 'Getting Started with Next.js',
    description: 'Build fast and modern web applications using Next.js.',
    category: 'Next.js',
    level: 'Intermediate',
    readTime: '12 min read',
    href: '/learn/nextjs/introduction',
  },
  {
    title: 'Node.js Modules Explained',
    description: 'Understand CommonJS, ES Modules, and project structure.',
    category: 'Node.js',
    level: 'Intermediate',
    readTime: '9 min read',
    href: '/learn/nodejs/modules',
  },
];
export default function LatestTutorials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-semibold text-blue-500">Latest Tutorials</p>

          <h2 className="mt-2 text-4xl font-bold">Recently Added Tutorials</h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Stay up to date with our newest tutorials and learning resources.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link href={tutorial.href}>
                <div className="group h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                      {tutorial.category}
                    </span>

                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold group-hover:text-blue-500">
                    {tutorial.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {tutorial.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="rounded-full bg-muted px-3 py-1 text-xs">
                      {tutorial.level}
                    </span>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {tutorial.readTime}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-500">
                    Read Tutorial
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 font-medium text-blue-500 hover:gap-3"
          >
            View All Tutorials
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
