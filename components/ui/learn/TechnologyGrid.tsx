"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
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
} from "react-icons/si";

import { ArrowRight, MessageCircleQuestion } from "lucide-react";

import { categories } from "./CategorySection";

const technologies = [
  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    tutorials: 48,
    level: "Beginner",
    href: "/learn/javascript",
    interviewHref: "/interview-questions/javascript",
    interviewQuestions: "150+",
    categories: ["frontend", "programming"],
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    tutorials: 30,
    level: "Beginner",
    href: "/learn/typescript",
    interviewHref: "/interview-questions/typescript",
    interviewQuestions: "90+",
    categories: ["programming"],
  },
  {
    title: "React",
    icon: SiReact,
    color: "#61DAFB",
    tutorials: 42,
    level: "Intermediate",
    href: "/learn/react",
    interviewHref: "/interview-questions/react",
    interviewQuestions: "120+",
    categories: ["frontend"],
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    color: "#ffffff",
    level: "Intermediate",
    href: null,
    categories: ["frontend"],
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
    tutorials: 34,
    level: "Intermediate",
    href: "/learn/nodejs",
    interviewHref: "/interview-questions/nodejs",
    interviewQuestions: "25+",
    categories: ["backend"],
  },
  {
    title: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
    tutorials: 27,
    level: "Beginner",
    href: "/learn/html",
    interviewHref: "/interview-questions/html",
    interviewQuestions: "90+",
    categories: ["frontend"],
  },
  {
    title: "CSS",
    icon: SiCss,
    color: "#1572B6",
    tutorials: 30,
    level: "Beginner",
    href: "/learn/css",
    interviewHref: "/interview-questions/css",
    interviewQuestions: "90+",
    categories: ["frontend"],
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: "Intermediate",
    href: null,
    categories: ["frontend"],
  },
  {
    title: "Git",
    icon: SiGit,
    color: "#F05032",
    tutorials: 28,
    level: "Beginner",
    href: "/learn/git",
    categories: ["tools"],
  },
  {
    title: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    tutorials: 24,
    level: "Advanced",
    href: "/learn/docker",
    categories: ["tools"],
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    tutorials: 26,
    level: "Intermediate",
    href: "/learn/mongodb",
    categories: ["database"],
  },
  {
    title: "SQL",
    icon: SiMysql,
    color: "#4479A1",
    tutorials: 30,
    level: "Beginner",
    href: "/learn/sql",
    categories: ["database"],
  },
];

export default function TechnologyGrid() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  const activeCategoryLabel = categories.find(
    (c) => c.slug === activeCategory,
  )?.title;

  const visibleTechnologies = activeCategory
    ? technologies.filter((tech) => tech.categories.includes(activeCategory))
    : technologies;

  return (
    <section id="technologies" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-[#FBBF24] font-semibold">Technologies</p>
          <h2 className="mt-2 text-4xl font-bold">Choose Your Learning Path</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {activeCategoryLabel
              ? `Browse ${activeCategoryLabel} tutorials and technologies.`
              : "Browse tutorials for the most popular technologies used in modern web development."}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Link
            href="/learn#technologies"
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              !activeCategory
                ? "border-[#FBBF24] bg-[#FBBF24]/10 text-[#FBBF24]"
                : "text-muted-foreground hover:border-[#FBBF24] hover:text-[#FBBF24]"
            }`}
          >
            All
          </Link>

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/learn?category=${category.slug}#technologies`}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeCategory === category.slug
                  ? "border-[#FBBF24] bg-blue-500/10 text-[#FBBF24]"
                  : "text-muted-foreground hover:border-[#FBBF24] hover:text-[#FBBF24]"
              }`}
            >
              {category.title}
            </Link>
          ))}
        </div>

        {visibleTechnologies.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed p-12 text-center text-muted-foreground">
            No {activeCategoryLabel} technologies yet — more tutorials are on
            the way.
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleTechnologies.map((tech, index) => {
              const Icon = tech.icon;
              const isAvailable = Boolean(tech.href);

              const card = (
                <div
                  className={`group relative h-full rounded-2xl border bg-card p-6 transition-all duration-300 ${
                    isAvailable
                      ? "hover:-translate-y-2 hover:border-[#FBBF24] dark:hover:border-[#917d4a] hover:shadow-xl"
                      : "opacity-60"
                  }`}
                >
                  {!isAvailable && (
                    <span className="absolute right-4 top-4 rounded-full border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      Coming Soon
                    </span>
                  )}

                  {isAvailable ? (
                    <Link href={tech.href!} className="block">
                      <Icon
                        size={26}
                        color={tech.color}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <h3 className="mt-6 text-xl font-semibold">
                        {tech.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {tech.tutorials} Tutorials
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#FBBF24]">
                        Start Learning
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </Link>
                  ) : (
                    <>
                      <Icon
                        size={26}
                        color={tech.color}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <h3 className="mt-6 text-xl font-semibold">
                        {tech.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Tutorials coming soon
                      </p>
                    </>
                  )}

                  {tech.interviewHref ? (
                    <Link
                      href={tech.interviewHref}
                      className="relative z-10 mt-4 flex items-center gap-1.5 border-t pt-4 text-xs font-medium text-muted-foreground transition-colors hover:text-[#FBBF24]"
                    >
                      <MessageCircleQuestion size={14} />
                      {tech.interviewQuestions} Interview Questions
                    </Link>
                  ) : (
                    <div className="mt-4 flex items-center gap-1.5 border-t pt-4 text-xs font-medium text-muted-foreground/60">
                      <MessageCircleQuestion size={14} />
                      Interview questions coming soon
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
                  transition={{ delay: index * 0.05 }}
                >
                  {card}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
