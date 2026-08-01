'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, ChevronDown, Copy, Hash, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import type { InterviewDifficulty, InterviewQuestion } from '@/app/types/tutorial';

const DIFFICULTY_META: Record<InterviewDifficulty, { label: string; dot: string; badge: string }> =
  {
    beginner: {
      label: 'Beginner',
      dot: 'bg-emerald-400',
      badge: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
    },
    intermediate: {
      label: 'Intermediate',
      dot: 'bg-amber-400',
      badge: 'border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300',
    },
    advanced: {
      label: 'Advanced',
      dot: 'bg-rose-400',
      badge: 'border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300',
    },
  };

const DIFFICULTY_FILTERS: { value: 'all' | InterviewDifficulty; label: string; dot?: string }[] = [
  { value: 'all', label: 'All levels' },
  { value: 'beginner', label: 'Beginner', dot: DIFFICULTY_META.beginner.dot },
  { value: 'intermediate', label: 'Intermediate', dot: DIFFICULTY_META.intermediate.dot },
  { value: 'advanced', label: 'Advanced', dot: DIFFICULTY_META.advanced.dot },
];

/** Renders `code` and **bold** spans inside a line of text. */
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="rounded bg-violet-500/10 px-1.5 py-0.5 font-mono text-[0.85em] text-violet-700 dark:text-violet-300"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

const JS_KEYWORDS = new Set([
  'const',
  'let',
  'var',
  'function',
  'return',
  'if',
  'else',
  'for',
  'while',
  'do',
  'class',
  'extends',
  'new',
  'this',
  'export',
  'default',
  'import',
  'from',
  'as',
  'async',
  'await',
  'try',
  'catch',
  'finally',
  'throw',
  'typeof',
  'instanceof',
  'of',
  'in',
  'switch',
  'case',
  'break',
  'continue',
  'null',
  'undefined',
  'true',
  'false',
  'void',
  'yield',
  'static',
  'get',
  'set',
  'delete',
]);

const CODE_TOKEN_PATTERN =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\b\d+(?:\.\d+)?\b|\b[A-Za-z_$][\w$]*\b)/g;

function tokenizeCode(code: string) {
  return code.split(CODE_TOKEN_PATTERN).map((part) => {
    if (!part) return { text: part, cls: '' };
    if (part.startsWith('//') || part.startsWith('/*')) {
      return { text: part, cls: 'text-zinc-500 italic' };
    }
    if (/^["'`]/.test(part)) {
      return { text: part, cls: 'text-emerald-400' };
    }
    if (/^\d/.test(part)) {
      return { text: part, cls: 'text-orange-400' };
    }
    if (JS_KEYWORDS.has(part)) {
      return { text: part, cls: 'text-violet-400' };
    }
    return { text: part, cls: '' };
  });
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const tokens = useMemo(() => tokenizeCode(code), [code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/5 dark:bg-[#2a292e] bg-[#1f1f20]">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          {language && (
            <span className="text-xs font-medium uppercase tracking-wide  text-white">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="text-white cursor-pointer transition hover:text-foreground"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-[0.85rem] leading-6 text-zinc-200">
          {tokens.map((t, i) =>
            t.cls ? (
              <span key={i} className={t.cls}>
                {t.text}
              </span>
            ) : (
              t.text
            )
          )}
        </code>
      </pre>
    </div>
  );
}

type AnswerBlock =
  | { kind: 'heading'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'code'; language: string; code: string }
  | { kind: 'paragraph'; text: string };

function parseAnswerBlocks(answer: string): AnswerBlock[] {
  const rawBlocks = answer
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return rawBlocks.map((block): AnswerBlock => {
    if (block.startsWith('```')) {
      const lines = block.split('\n');
      const language = lines[0].slice(3).trim();
      const closingIndex =
        lines[lines.length - 1].trim() === '```' ? lines.length - 1 : lines.length;
      return { kind: 'code', language, code: lines.slice(1, closingIndex).join('\n') };
    }

    const lines = block
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length > 0 && lines.every((l) => l.startsWith('- '))) {
      return { kind: 'list', items: lines.map((l) => l.slice(2)) };
    }

    if (lines.length === 1 && lines[0].startsWith('**') && lines[0].endsWith('**')) {
      return { kind: 'heading', text: lines[0].slice(2, -2) };
    }

    return { kind: 'paragraph', text: lines.join(' ') };
  });
}

function AnswerDetail({ answer }: { answer: string }) {
  const blocks = useMemo(() => parseAnswerBlocks(answer), [answer]);

  return (
    <div className="mt-4 space-y-4">
      {blocks.map((block, i) => {
        if (block.kind === 'heading') {
          return (
            <h4 key={i} className="text-base font-bold text-foreground">
              {block.text}
            </h4>
          );
        }
        if (block.kind === 'list') {
          return (
            <ul
              key={i}
              className="ml-1 list-disc space-y-1.5 pl-5 marker:text-violet-600 dark:marker:text-violet-400"
            >
              {block.items.map((item, j) => (
                <li key={j} className="text-[0.95rem] leading-7 text-muted-foreground">
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          );
        }
        if (block.kind === 'code') {
          return <CodeBlock key={i} language={block.language} code={block.code} />;
        }
        return (
          <p key={i} className="text-[0.95rem] leading-7 text-muted-foreground">
            {renderInline(block.text)}
          </p>
        );
      })}
    </div>
  );
}

export interface InterviewTopic {
  title: string;
  slug: string;
  questions: InterviewQuestion[];
  hasTutorial?: boolean;
}

interface InterviewQuestionsViewProps {
  technology: string;
  technologySlug: string;
  topics: InterviewTopic[];
  totalQuestions: number;
}

export default function InterviewQuestionsView({
  technology,
  technologySlug,
  topics,
  totalQuestions,
}: InterviewQuestionsViewProps) {
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState<'all' | InterviewDifficulty>('all');
  const [listExpanded, setListExpanded] = useState(true);

  const filteredTopics = useMemo(() => {
    const term = query.trim().toLowerCase();

    return topics
      .map((topic) => ({
        ...topic,
        questions: topic.questions.filter((q) => {
          const matchesTerm =
            !term ||
            q.question.toLowerCase().includes(term) ||
            q.answer.toLowerCase().includes(term);
          const matchesDifficulty = difficulty === 'all' || q.difficulty === difficulty;
          return matchesTerm && matchesDifficulty;
        }),
      }))
      .filter((topic) => topic.questions.length > 0);
  }, [query, difficulty, topics]);

  const visibleCount = filteredTopics.reduce((total, topic) => total + topic.questions.length, 0);
  const isSearching = query.trim().length > 0;

  const topicStartIndex = useMemo(() => {
    const starts: Record<string, number> = {};
    let count = 0;
    filteredTopics.forEach((topic) => {
      starts[topic.slug] = count;
      count += topic.questions.length;
    });
    return starts;
  }, [filteredTopics]);

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="container relative mx-auto px-6">
        <Link
          href="/interview-questions"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All interview questions
        </Link>

        <div className="mt-8 max-w-3xl">
          <Badge className="rounded-full border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-violet-700 dark:text-violet-300">
            {totalQuestions}+ Questions
          </Badge>

          <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
            {technology} Interview{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 bg-clip-text text-transparent">
              Questions &amp; Answers
            </span>
          </h1>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Curated {technology} interview questions with detailed answers, grouped by topic.
            Search, revise and get interview-ready.
          </p>
        </div>

        {/* Search */}
        <div className="relative mt-10 max-w-3xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="h-12 rounded-xl pl-12 text-base"
          />
        </div>

        {isSearching && (
          <p className="mt-4 text-sm text-muted-foreground">
            {visibleCount} result{visibleCount === 1 ? '' : 's'} for &ldquo;{query.trim()}&rdquo;
          </p>
        )}

        <div className="mt-10 lg:mt-12">
          {/* List of Questions bar */}
          <button
            onClick={() => setListExpanded((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl border bg-card px-5 py-4 text-left transition hover:border-violet-500/40"
          >
            <span className="flex items-center gap-3 text-base font-semibold">
              List of Questions
              <Badge variant="secondary" className="rounded-full px-2.5 py-0.5">
                {visibleCount}
              </Badge>
            </span>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground transition-transform ${
                listExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Filter by difficulty */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm text-muted-foreground">Filter by difficulty:</span>
            {DIFFICULTY_FILTERS.map((item) => {
              const active = difficulty === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => setDifficulty(item.value)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                    active
                      ? 'border-violet-500 bg-violet-500 text-white'
                      : 'border-border text-muted-foreground hover:border-violet-500/40 hover:text-foreground'
                  }`}
                >
                  {item.dot ? (
                    <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
                  ) : (
                    <span className="flex gap-0.5">
                      <span className="h-1 w-1 rounded-full bg-current" />
                      <span className="h-1 w-1 rounded-full bg-current" />
                      <span className="h-1 w-1 rounded-full bg-current" />
                    </span>
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {listExpanded && (
            <div className="mt-10 space-y-2">
              {filteredTopics.map((topic) => (
                <div key={topic.slug}>
                  {topic.questions.map((item, i) => {
                    const questionNumber = topicStartIndex[topic.slug] + i + 1;
                    const anchor = `${topic.slug}-q${questionNumber}`;
                    const meta = DIFFICULTY_META[item.difficulty];
                    return (
                      <div
                        key={anchor}
                        id={anchor}
                        className="scroll-mt-24 border-b border-border/60 py-7 first:pt-0"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-lg font-bold leading-7">
                            <span className="text-violet-600 dark:text-violet-400">
                              Q{questionNumber}.
                            </span>{' '}
                            {item.question}
                          </h3>
                          <a
                            href={`#${anchor}`}
                            className="mt-1 shrink-0 text-muted-foreground/50 transition hover:text-violet-600 dark:hover:text-violet-400"
                            aria-label="Link to this question"
                          >
                            <Hash className="h-4 w-4" />
                          </a>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          {/* <Badge
                            variant="outline"
                            className="rounded-full border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-200"
                          >
                            {topic.title}
                          </Badge> */}
                          <Badge variant="outline" className={`gap-1.5 rounded-full ${meta.badge}`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                            {meta.label}
                          </Badge>
                          {topic.hasTutorial && (
                            <Link
                              href={`/learn/${technologySlug}/${topic.slug}`}
                              className="text-xs font-medium text-violet-600 dark:text-violet-400 transition hover:translate-x-0.5"
                            >
                              Learn topic →
                            </Link>
                          )}
                        </div>

                        <AnswerDetail answer={item.answer} />
                      </div>
                    );
                  })}
                </div>
              ))}

              {filteredTopics.length === 0 && (
                <p className="py-16 text-center text-muted-foreground">
                  No questions found{isSearching ? ` for “${query.trim()}”` : ''}.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
