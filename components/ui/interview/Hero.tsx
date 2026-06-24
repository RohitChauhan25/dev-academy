'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  BrainCircuit,
  Code2,
  Database,
  Server,
  Network,
  Binary,
  FileCode2,
  Atom,
} from 'lucide-react';
import { RiNextjsFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

const technologies = [
  {
    title: 'JavaScript',
    description: 'Closures, Promises, Event Loop, DOM, Async/Await, Hoisting and more.',
    questions: 240,
    icon: Code2,
    color: 'text-yellow-400',
  },
  {
    title: 'React',
    description: 'Hooks, Lifecycle, Performance, Context API, Redux, React 19.',
    questions: 180,
    icon: Atom,
    color: 'text-cyan-400',
  },
  {
    title: 'Node.js',
    description: 'Express, Authentication, Streams, Event Loop, REST APIs.',
    questions: 150,
    icon: Server,
    color: 'text-green-400',
  },
  {
    title: 'TypeScript',
    description: 'Generics, Utility Types, Interfaces, Advanced Types.',
    questions: 130,
    icon: FileCode2,
    color: 'text-blue-400',
  },

  {
    title: 'Next.js',
    description: 'OOP, Generators, Decorators, Django, Flask, FastAPI.',
    questions: 190,
    icon: RiNextjsFill,
    color: 'text-black-400',
  },
  {
    title: 'SQL',
    description: 'Joins, Indexing, Transactions, Window Functions.',
    questions: 140,
    icon: Database,
    color: 'text-pink-400',
  },
  {
    title: 'MONGODB',
    description: 'Joins, Indexing, Transactions, Window Functions.',
    questions: 140,
    icon: SiMongodb,
    color: 'text-green-400',
  },
  {
    title: 'System Design',
    description: 'Scalability, Caching, Load Balancer, CAP, Queues.',
    questions: 170,
    icon: Network,
    color: 'text-violet-400',
  },
];

export default function Hero() {
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
            <span className="bg-gradient-to-r from-orange-500 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
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
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {technologies.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group rounded-2xl border bg-card/70 p-6 backdrop-blur transition-all"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                {item.icon && <item.icon className={`h-6 w-6 ${item.color}`} />}
              </div>

              <h3 className="text-lg font-bold">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Curated interview questions, important concepts, practical examples and preparation
                roadmap.
              </p>

              <Link
                href="/practice"
                className="mt-5 inline-flex items-center text-sm font-medium text-violet-400 transition group-hover:translate-x-1"
              >
                Start Practice →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
