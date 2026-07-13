'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Server, Database, GitBranch } from 'lucide-react';

const learningPaths = [
  {
    title: 'Frontend Developer',
    icon: Monitor,
    description: 'Learn everything required to build modern and responsive web applications.',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
    href: '/learn/frontend',
  },
  {
    title: 'Backend Developer',
    icon: Server,
    description: 'Build secure and scalable APIs with modern backend technologies.',
    topics: ['Node.js', 'Express', 'MongoDB', 'Authentication', 'Deployment'],
    href: '/learn/backend',
  },
  {
    title: 'Database',
    icon: Database,
    description: 'Understand relational and NoSQL databases with practical examples.',
    topics: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    href: '/learn/database',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    description: 'Master Git and GitHub for collaboration and project management.',
    topics: ['Git Basics', 'Branches', 'Merge', 'Pull Requests', 'GitHub'],
    href: '/learn/git',
  },
];

export default function LearningPaths() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-semibold text-blue-500">Learning Paths</p>

          <h2 className="mt-2 text-4xl font-bold">Follow a Structured Roadmap</h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Learn step-by-step with curated learning paths designed for beginners and experienced
            developers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {learningPaths.map((path, index) => {
            const Icon = path.icon;

            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-blue-500/10 p-4">
                      <Icon className="h-7 w-7 text-blue-500" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold">{path.title}</h3>

                      <p className="mt-1 text-sm text-muted-foreground">{path.description}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {path.topics.map((topic) => (
                      <span key={topic} className="rounded-full border bg-muted px-4 py-2 text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={path.href}
                    className="mt-8 inline-flex items-center gap-2 font-medium text-blue-500 transition hover:gap-3"
                  >
                    View Learning Path
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
