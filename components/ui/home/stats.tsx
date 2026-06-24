'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import { BookOpen, Building2, Code2, FileText } from 'lucide-react';

const stats = [
  {
    icon: BookOpen,
    value: 1200,
    suffix: '+',
    title: 'Interview Questions',
    description: 'Curated questions from beginner to advanced level.',
  },
  {
    icon: Building2,
    value: 150,
    suffix: '+',
    title: 'Companies',
    description: 'Company-specific interview experiences and questions.',
  },
  {
    icon: Code2,
    value: 20,
    suffix: '+',
    title: 'Technologies',
    description: 'Frontend, Backend, DSA, System Design and more.',
  },
  {
    icon: FileText,
    value: 250,
    suffix: '+',
    title: 'Technical Blogs',
    description: 'In-depth tutorials and interview preparation guides.',
  },
];

export default function PlatformStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold">Everything You Need</h2>

          <p className="mt-4 text-muted-foreground">
            Practice interview questions, explore technical blogs, and prepare for software
            engineering interviews.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                className="group relative overflow-hidden rounded-3xl border bg-card p-8"
              >
                {/* Animated Top Border */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

                {/* Glow */}

                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100" />

                {/* Background Gradient */}

                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/5 to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.15,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                    }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-500 group-hover:bg-primary"
                  >
                    <Icon className="h-8 w-8 text-primary transition-colors duration-500 group-hover:text-white" />
                  </motion.div>

                  <h3 className="text-4xl font-black transition-colors duration-300 group-hover:text-primary">
                    {inView && <CountUp end={item.value} duration={2} />}

                    {item.suffix}
                  </h3>

                  <h4 className="mt-3 text-xl font-semibold">{item.title}</h4>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground transition-all duration-500 group-hover:translate-y-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
