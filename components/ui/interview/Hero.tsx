'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Database,
  Server,
  Network,
  FileCode2,
  Atom,
} from 'lucide-react';
import { RiNextjsFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';

const categories = [
  'Frontend',
  'Backend',
  'Full Stack',
  'JavaScript',
  'React',
  'Node.js',
  'Java',
  'Python',
  'System Design',
  'Machine Coding',
  'DSA',
  'SQL',
];

const questionSets = [
  {
    title: 'JavaScript Interview Questions & Answers',
    description: 'Closures, Promises, Event Loop, DOM, Async/Await, Hoisting and more.',
    questions: '150+',
    icon: Code2,
    color: 'text-yellow-400',
    href: '/interview-questions/javascript',
    status: 'live' as const,
  },
  {
    title: 'React.js Interview Questions & Answers',
    description: 'Hooks, Lifecycle, Performance, Context API, Redux, React 19.',
    questions: '100+',
    icon: Atom,
    color: 'text-cyan-400',
    status: 'coming-soon' as const,
  },
  {
    title: 'Node.js Interview Questions & Answers',
    description: 'Express, Authentication, Streams, Event Loop, REST APIs.',
    questions: '80+',
    icon: Server,
    color: 'text-green-400',
    status: 'coming-soon' as const,
  },
  {
    title: 'TypeScript Interview Questions & Answers',
    description: 'Generics, Utility Types, Interfaces, Advanced Types.',
    questions: '60+',
    icon: FileCode2,
    color: 'text-blue-400',
    status: 'coming-soon' as const,
  },
  {
    title: 'Next.js Interview Questions & Answers',
    description: 'Routing, Rendering Strategies, Server Actions, Middleware.',
    questions: '50+',
    icon: RiNextjsFill,
    color: 'text-foreground',
    status: 'coming-soon' as const,
  },
  {
    title: 'SQL Interview Questions & Answers',
    description: 'Joins, Indexing, Transactions, Window Functions.',
    questions: '70+',
    icon: Database,
    color: 'text-pink-400',
    status: 'coming-soon' as const,
  },
  {
    title: 'MongoDB Interview Questions & Answers',
    description: 'Aggregation, Indexing, Schema Design, Replication.',
    questions: '40+',
    icon: SiMongodb,
    color: 'text-green-400',
    status: 'coming-soon' as const,
  },
  {
    title: 'System Design Concepts',
    description: 'Scalability, Caching, Load Balancer, CAP, Queues.',
    questions: '30+',
    icon: Network,
    color: 'text-violet-400',
    status: 'coming-soon' as const,
  },
];

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-background" />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}

          <Badge className="rounded-full border-violet-500/30 bg-violet-500/10 px-5 py-2 text-violet-300">
            <Sparkles className="mr-2 h-4 w-4" />
            Practice • Learn • Crack Interviews
          </Badge>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-8 text-5xl font-black leading-tight md:text-7xl"
          >
            Prepare for
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400  bg-clip-text text-transparent">
              Technical Interview Rounds
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground"
          >
            Practice interview questions for Frontend, Backend, Full Stack, System Design, Machine
            Coding and DSA. Explore curated interview rounds, company questions and developer
            blogs—all in one place.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="rounded-xl px-8 transition hover:scale-105" asChild>
              <Link href="/practice">
                Explore Interview Rounds
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-8 transition hover:scale-105"
              asChild
            >
              <Link href="/blogs">Read Developer Blogs</Link>
            </Button>
          </motion.div>

          {/* Categories */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
            }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {categories.map((item) => (
              <span
                key={item}
                className="rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-white"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* Cards */}
        </div>

        <div ref={ref} className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {questionSets.map((item, index) => {
            const isLive = item.status === 'live';
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={isLive ? { y: -6 } : undefined}
                className={`group relative h-full overflow-hidden rounded-2xl border bg-card p-6 transition-colors duration-300 ${
                  isLive ? 'hover:border-violet-500' : 'opacity-80'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    {item.icon && <item.icon className={`h-6 w-6 ${item.color}`} />}
                  </div>

                  <h3 className="text-lg font-bold">
                    {item.questions} {item.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>

                <div className="mt-5">
                  {isLive ? (
                    <span className="inline-flex items-center text-sm font-medium text-violet-400 transition group-hover:translate-x-1">
                      View questions →
                    </span>
                  ) : (
                    <Badge variant="secondary" className="uppercase tracking-wide">
                      Coming soon
                    </Badge>
                  )}
                </div>
              </motion.div>
            );

            return isLive ? (
              <Link key={item.title} href={item.href}>
                {Card}
              </Link>
            ) : (
              <div key={item.title}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
