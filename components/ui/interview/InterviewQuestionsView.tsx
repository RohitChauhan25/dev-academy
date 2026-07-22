'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface InterviewQuestion {
  question: string;
  answer: string;
}

/** Renders `code` spans inside a single line of answer text. */
function renderInline(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="rounded bg-violet-500/10 px-1.5 py-0.5 font-mono text-[0.85em] text-violet-300"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

/** Detailed, readable rendering of an interview answer string. */
function AnswerDetail({ answer }: { answer: string }) {
  const paragraphs = answer
    .split(/\n{2,}|\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.04] px-5 py-4">
      <span className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400">
        Answer
      </span>
      <div className="space-y-3">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-[0.95rem] leading-7 text-muted-foreground">
            {renderInline(paragraph)}
          </p>
        ))}
      </div>
    </div>
  );
}

export interface InterviewTopic {
  title: string;
  slug: string;
  questions: InterviewQuestion[];
}

interface InterviewQuestionsViewProps {
  technology: string;
  topics: InterviewTopic[];
  totalQuestions: number;
}

export default function InterviewQuestionsView({
  technology,
  topics,
  totalQuestions,
}: InterviewQuestionsViewProps) {
  const [query, setQuery] = useState('');

  const filteredTopics = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return topics;

    return topics
      .map((topic) => ({
        ...topic,
        questions: topic.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(term) || q.answer.toLowerCase().includes(term),
        ),
      }))
      .filter((topic) => topic.questions.length > 0);
  }, [query, topics]);

  const visibleCount = filteredTopics.reduce((total, topic) => total + topic.questions.length, 0);

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="container relative mx-auto max-w-4xl px-6">
        <Link
          href="/interview-questions"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All interview questions
        </Link>

        <div className="mt-8">
          <Badge className="rounded-full border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-violet-300">
            {totalQuestions}+ Questions
          </Badge>

          <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
            {technology} Interview{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 bg-clip-text text-transparent">
              Questions &amp; Answers
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            Curated {technology} interview questions with detailed answers, grouped by topic.
            Search, revise and get interview-ready.
          </p>
        </div>

        {/* Search */}
        <div className="relative mt-10">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="h-12 rounded-xl pl-12 text-base"
          />
        </div>

        {query.trim() && (
          <p className="mt-4 text-sm text-muted-foreground">
            {visibleCount} result{visibleCount === 1 ? '' : 's'} for &ldquo;{query.trim()}&rdquo;
          </p>
        )}

        {/* Questions grouped by topic */}
        <div className="mt-12 space-y-14">
          {filteredTopics.map((topic) => (
            <div key={topic.slug}>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold">{topic.title}</h2>
                <Link
                  href={`/learn/javascript/${topic.slug}`}
                  className="shrink-0 text-sm font-medium text-violet-400 transition hover:translate-x-0.5"
                >
                  Learn topic →
                </Link>
              </div>

              <Accordion type="single" collapsible className="mt-4">
                {topic.questions.map((item, index) => (
                  <AccordionItem key={index} value={`${topic.slug}-${index}`}>
                    <AccordionTrigger className="cursor-pointer py-5 text-left">
                      <span>
                        <strong>Q{index + 1}.</strong> {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <AnswerDetail answer={item.answer} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {filteredTopics.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              No questions found for &ldquo;{query.trim()}&rdquo;.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
