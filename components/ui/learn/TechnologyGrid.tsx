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
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';

import { ArrowRight } from 'lucide-react';

const technologies = [
  {
    title: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    tutorials: 45,
    level: 'Beginner',
    href: '/learn/javascript',
  },
  {
    title: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
    tutorials: 30,
    level: 'Beginner',
    href: '/learn/typescript',
  },
  {
    title: 'React',
    icon: SiReact,
    color: '#61DAFB',
    tutorials: 40,
    level: 'Intermediate',
    href: '/learn/react',
  },
  {
    title: 'Next.js',
    icon: SiNextdotjs,
    color: '#ffffff',
    tutorials: 25,
    level: 'Intermediate',
    href: '/learn/nextjs',
  },
  {
    title: 'Node.js',
    icon: SiNodedotjs,
    color: '#5FA04E',
    tutorials: 35,
    level: 'Intermediate',
    href: '/learn/nodejs',
  },
  {
    title: 'HTML',
    icon: SiHtml5,
    color: '#E34F26',
    tutorials: 20,
    level: 'Beginner',
    href: '/learn/html',
  },
  {
    title: 'CSS',
    icon: SiCss,
    color: '#1572B6',
    tutorials: 25,
    level: 'Beginner',
    href: '/learn/css',
  },
  {
    title: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4',
    tutorials: 22,
    level: 'Intermediate',
    href: '/learn/tailwindcss',
  },
  {
    title: 'Git',
    icon: SiGit,
    color: '#F05032',
    tutorials: 15,
    level: 'Beginner',
    href: '/learn/git',
  },
  {
    title: 'Docker',
    icon: SiDocker,
    color: '#2496ED',
    tutorials: 18,
    level: 'Advanced',
    href: '/learn/docker',
  },
  {
    title: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
    tutorials: 24,
    level: 'Intermediate',
    href: '/learn/mongodb',
  },
  {
    title: 'SQL',
    icon: SiMysql,
    color: '#4479A1',
    tutorials: 28,
    level: 'Beginner',
    href: '/learn/sql',
  },
];

export default function TechnologyGrid() {
  return (
    <section id="technologies" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-blue-500 font-semibold">Technologies</p>

          <h2 className="mt-2 text-4xl font-bold">Choose Your Learning Path</h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Browse tutorials for the most popular technologies used in modern web development.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

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
                <Link href={tech.href}>
                  <div className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                    <Icon
                      size={46}
                      color={tech.color}
                      className="transition-transform duration-300  group-hover:scale-110"
                    />

                    <h3 className="mt-6 text-xl font-semibold">{tech.title}</h3>

                    <p className="mt-2 text-sm text-muted-foreground">{tech.tutorials} Tutorials</p>

                    {/* <div className="mt-4 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                      {tech.level}
                    </div> */}

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-violet-400">
                      Start Learning
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
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
