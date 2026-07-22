'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss,
} from 'react-icons/si';

import { ArrowRight } from 'lucide-react';

interface PracticeTechnologyGridProps {
  javascriptQuestionCount: number;
}

export default function PracticeTechnologyGrid({
  javascriptQuestionCount,
}: PracticeTechnologyGridProps) {
  const technologies = [
    {
      title: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      questions: javascriptQuestionCount,
      href: '/practice/javascript',
    },
    {
      title: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6',
      href: null,
    },
    {
      title: 'React',
      icon: SiReact,
      color: '#61DAFB',
      href: null,
    },
    {
      title: 'Next.js',
      icon: SiNextdotjs,
      color: '#ffffff',
      href: null,
    },
    {
      title: 'Node.js',
      icon: SiNodedotjs,
      color: '#5FA04E',
      href: null,
    },
    {
      title: 'HTML',
      icon: SiHtml5,
      color: '#E34F26',
      href: null,
    },
    {
      title: 'CSS',
      icon: SiCss,
      color: '#1572B6',
      href: null,
    },
  ];

  return (
    <section id="technologies" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-semibold text-violet-500">Technologies</p>

          <h2 className="mt-2 text-4xl font-bold">Choose What to Practice</h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            More technologies are on the way — start with JavaScript today.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const isAvailable = Boolean(tech.href);

            const card = (
              <div
                className={`group relative h-full rounded-2xl border bg-card p-6 transition-all duration-300 ${
                  isAvailable
                    ? 'hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl'
                    : 'opacity-60'
                }`}
              >
                {!isAvailable && (
                  <span className="absolute right-4 top-4 rounded-full border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    Coming Soon
                  </span>
                )}

                <Icon
                  size={46}
                  color={tech.color}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mt-6 text-xl font-semibold">{tech.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {isAvailable ? `${tech.questions} Questions` : 'Practice questions coming soon'}
                </p>

                {isAvailable && (
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-violet-400">
                    Start Practice
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                )}
              </div>
            );

            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
              >
                {tech.href ? <Link href={tech.href}>{card}</Link> : card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
