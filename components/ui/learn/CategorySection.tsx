'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Monitor, Server, BrainCircuit, Database, Boxes, Code2 } from 'lucide-react';

const categories = [
  {
    title: 'Frontend',
    description: 'HTML, CSS, JavaScript, React, Next.js',
    icon: Monitor,
    href: '/learn/frontend',
  },
  {
    title: 'Backend',
    description: 'Node.js, Express, APIs, Authentication',
    icon: Server,
    href: '/learn/backend',
  },
  {
    title: 'Programming',
    description: 'JavaScript, TypeScript, Python, Java',
    icon: Code2,
    href: '/learn/programming',
  },
  {
    title: 'Database',
    description: 'MongoDB, MySQL, PostgreSQL',
    icon: Database,
    href: '/learn/database',
  },
  {
    title: 'DSA',
    description: 'Arrays, Trees, Graphs, Dynamic Programming',
    icon: BrainCircuit,
    href: '/learn/dsa',
  },
  {
    title: 'Tools',
    description: 'Git, Docker, VS Code, npm',
    icon: Boxes,
    href: '/learn/tools',
  },
];

export default function CategorySection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-semibold text-blue-500">Categories</p>

          <h2 className="mt-2 text-4xl font-bold">Browse by Category</h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose a category and start learning the technologies that matter most.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link href={category.href}>
                  <div className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10">
                      <Icon className="h-7 w-7 text-blue-500 transition-transform group-hover:scale-110" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">{category.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
