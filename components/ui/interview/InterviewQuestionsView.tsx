"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Copy,
  Hash,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import type {
  InterviewDifficulty,
  InterviewQuestion,
} from "@/app/types/tutorial";

const DIFFICULTY_META: Record<
  InterviewDifficulty,
  { label: string; dot: string; badge: string }
> = {
  beginner: {
    label: "Beginner",
    dot: "bg-emerald-400",
    badge:
      "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  },
  intermediate: {
    label: "Intermediate",
    dot: "bg-amber-400",
    badge:
      "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  },
  advanced: {
    label: "Advanced",
    dot: "bg-rose-400",
    badge: "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300",
  },
};

const DIFFICULTY_FILTERS: {
  value: "all" | InterviewDifficulty;
  label: string;
  dot?: string;
}[] = [
  { value: "all", label: "All levels" },
  { value: "beginner", label: "Beginner", dot: DIFFICULTY_META.beginner.dot },
  {
    value: "intermediate",
    label: "Intermediate",
    dot: DIFFICULTY_META.intermediate.dot,
  },
  { value: "advanced", label: "Advanced", dot: DIFFICULTY_META.advanced.dot },
];

/** Renders `code` and **bold** spans inside a line of text. */
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
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
  "const",
  "let",
  "var",
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
  "do",
  "class",
  "extends",
  "new",
  "this",
  "export",
  "default",
  "import",
  "from",
  "as",
  "async",
  "await",
  "try",
  "catch",
  "finally",
  "throw",
  "typeof",
  "instanceof",
  "of",
  "in",
  "switch",
  "case",
  "break",
  "continue",
  "null",
  "undefined",
  "true",
  "false",
  "void",
  "yield",
  "static",
  "get",
  "set",
  "delete",
]);

const CODE_TOKEN_PATTERN =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\b\d+(?:\.\d+)?\b|\b[A-Za-z_$][\w$]*\b)/g;

function tokenizeCode(code: string) {
  return code.split(CODE_TOKEN_PATTERN).map((part) => {
    if (!part) return { text: part, cls: "" };
    if (part.startsWith("//") || part.startsWith("/*")) {
      return { text: part, cls: "text-zinc-500 italic" };
    }
    if (/^["'`]/.test(part)) {
      return { text: part, cls: "text-emerald-400" };
    }
    if (/^\d/.test(part)) {
      return { text: part, cls: "text-orange-400" };
    }
    if (JS_KEYWORDS.has(part)) {
      return { text: part, cls: "text-violet-400" };
    }
    return { text: part, cls: "" };
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
    <div className="overflow-hidden rounded-xl border border-white/5 dark:bg-[#2a292e] bg-[#2a292e]">
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
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
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
            ),
          )}
        </code>
      </pre>
    </div>
  );
}

interface ListItem {
  text: string;
  children?: string[];
}

type AnswerBlock =
  | { kind: "heading"; level: number; text: string }
  | { kind: "list"; ordered: boolean; items: ListItem[] }
  | { kind: "code"; language: string; code: string }
  | { kind: "image"; alt: string; src: string }
  | { kind: "paragraph"; text: string };

const IMAGE_LINE_PATTERN = /^!\[([^\]]*)\]\(([^)]+)\)$/;

// Matches a flat list ("- item") or an ordered list ("1. item") whose entries
// may each carry nested unordered sub-items indented beneath them ("   - sub").
function parseListBlock(
  rawLines: string[],
): { ordered: boolean; items: ListItem[] } | null {
  const isTopLevel = (line: string) => !/^\s/.test(line);
  const firstTop = rawLines.find(isTopLevel);
  if (!firstTop) return null;

  const ordered = /^\d+\.\s+/.test(firstTop);
  const unordered = /^-\s+/.test(firstTop);
  if (!ordered && !unordered) return null;

  const topPattern = ordered ? /^\d+\.\s+(.*)$/ : /^-\s+(.*)$/;
  const items: ListItem[] = [];

  for (const line of rawLines) {
    if (isTopLevel(line)) {
      const m = line.match(topPattern);
      if (!m) return null;
      items.push({ text: m[1] });
    } else {
      const m = line.trim().match(/^-\s+(.*)$/);
      if (!m || items.length === 0) return null;
      const last = items[items.length - 1];
      last.children = last.children ? [...last.children, m[1]] : [m[1]];
    }
  }

  return { ordered, items };
}

const isBlankLine = (line: string) => line.trim().length === 0;
const isTopListMarker = (line: string) =>
  !/^\s/.test(line) && (/^\d+\.\s+/.test(line) || /^-\s+/.test(line));
const isChildListMarker = (line: string) => /^\s+-\s+/.test(line);

// A line-based scan rather than a naive split on blank lines, so that a
// "loose" list — items separated by a blank line, which is valid Markdown —
// isn't torn into several separate lists that each restart their numbering.
function parseTextBlocks(text: string): AnswerBlock[] {
  const lines = text.split("\n");
  const blocks: AnswerBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    if (isBlankLine(lines[i])) {
      i++;
      continue;
    }

    if (isTopListMarker(lines[i])) {
      const listLines: string[] = [];
      while (i < lines.length) {
        if (isTopListMarker(lines[i]) || isChildListMarker(lines[i])) {
          listLines.push(lines[i]);
          i++;
        } else if (isBlankLine(lines[i])) {
          let j = i;
          while (j < lines.length && isBlankLine(lines[j])) j++;
          if (
            j < lines.length &&
            (isTopListMarker(lines[j]) || isChildListMarker(lines[j]))
          ) {
            i = j;
          } else {
            break;
          }
        } else {
          break;
        }
      }
      const list = parseListBlock(listLines);
      if (list) {
        blocks.push({ kind: "list", ordered: list.ordered, items: list.items });
        continue;
      }
    }

    const headingMatch = lines[i].trim().match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      blocks.push({
        kind: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2].trim(),
      });
      i++;
      continue;
    }

    // A standalone "![alt](src)" line renders as its own image block.
    const imageMatch = lines[i].trim().match(IMAGE_LINE_PATTERN);
    if (imageMatch) {
      blocks.push({ kind: "image", alt: imageMatch[1], src: imageMatch[2] });
      i++;
      continue;
    }

    // Legacy convention: a lone "**Text**" line acts as a sub-heading.
    const trimmed = lines[i].trim();
    const nextIsBoundary = i + 1 >= lines.length || isBlankLine(lines[i + 1]);
    if (
      trimmed.startsWith("**") &&
      trimmed.endsWith("**") &&
      trimmed.length > 4 &&
      nextIsBoundary
    ) {
      blocks.push({ kind: "heading", level: 3, text: trimmed.slice(2, -2) });
      i++;
      continue;
    }

    const paraLines: string[] = [];
    while (
      i < lines.length &&
      !isBlankLine(lines[i]) &&
      !isTopListMarker(lines[i]) &&
      !/^#{1,6}\s+/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ kind: "paragraph", text: paraLines.join(" ") });
    }
  }

  return blocks;
}

// Code fences are extracted first (via regex, across the whole answer) so that
// blank lines *inside* a fenced block don't get mistaken for paragraph breaks.
function parseAnswerBlocks(answer: string): AnswerBlock[] {
  const codeFencePattern = /```(\w*)\n([\s\S]*?)```/g;
  const blocks: AnswerBlock[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = codeFencePattern.exec(answer)) !== null) {
    blocks.push(...parseTextBlocks(answer.slice(lastIndex, match.index)));
    blocks.push({
      kind: "code",
      language: match[1].trim(),
      code: match[2].replace(/\n$/, ""),
    });
    lastIndex = codeFencePattern.lastIndex;
  }
  blocks.push(...parseTextBlocks(answer.slice(lastIndex)));

  return blocks;
}

const HEADING_STYLES: Record<
  number,
  { tag: "h4" | "h5" | "h6"; className: string }
> = {
  1: { tag: "h4", className: "text-2xl font-bold text-foreground" },
  2: { tag: "h4", className: "text-xl font-bold text-foreground" },
  3: { tag: "h4", className: "text-lg font-bold text-foreground" },
  4: { tag: "h5", className: "text-base font-bold text-foreground" },
  5: {
    tag: "h6",
    className: "text-sm font-bold uppercase tracking-wide text-foreground",
  },
  6: {
    tag: "h6",
    className:
      "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
  },
};

function AnswerDetail({ answer }: { answer: string }) {
  const blocks = useMemo(() => parseAnswerBlocks(answer), [answer]);

  return (
    <div className="mt-4 space-y-4">
      {blocks.map((block, i) => {
        if (block.kind === "heading") {
          const { tag: Tag, className } =
            HEADING_STYLES[block.level] ?? HEADING_STYLES[3];
          return (
            <Tag key={i} className={className}>
              {renderInline(block.text)}
            </Tag>
          );
        }
        if (block.kind === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={i}
              className={`ml-1 space-y-1.5 pl-5 marker:font-semibold marker:text-violet-600 dark:marker:text-violet-400 ${
                block.ordered ? "list-decimal" : "list-disc"
              }`}
            >
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="text-[17px] leading-7 text-muted-foreground"
                >
                  {renderInline(item.text)}
                  {item.children && item.children.length > 0 && (
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 marker:text-violet-600/70 dark:marker:text-violet-400/70">
                      {item.children.map((child, k) => (
                        <li
                          key={k}
                          className="text-[15px] leading-6 text-muted-foreground"
                        >
                          {renderInline(child)}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ListTag>
          );
        }
        if (block.kind === "code") {
          return (
            <CodeBlock key={i} language={block.language} code={block.code} />
          );
        }
        if (block.kind === "image") {
          // eslint-disable-next-line @next/next/no-img-element -- source can be any remote/local URL authored in content, unknown dimensions
          return (
            <img
              key={i}
              src={block.src}
              alt={block.alt}
              loading="lazy"
              className="w-full rounded-lg border border-border"
            />
          );
        }
        return (
          <p key={i} className="text-[17px] leading-7 text-muted-foreground">
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
  showTopicsSidebar?: boolean;
  showSearch?: boolean;
  showDifficultyFilter?: boolean;
  showQuestionCount?: boolean;
}

export default function InterviewQuestionsView({
  technology,
  technologySlug,
  topics,
  totalQuestions,
  showTopicsSidebar = true,
  showSearch = true,
  showDifficultyFilter = true,
  showQuestionCount = true,
}: InterviewQuestionsViewProps) {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<"all" | InterviewDifficulty>(
    "all",
  );
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
          const matchesDifficulty =
            difficulty === "all" || q.difficulty === difficulty;
          return matchesTerm && matchesDifficulty;
        }),
      }))
      .filter((topic) => topic.questions.length > 0);
  }, [query, difficulty, topics]);

  const visibleCount = filteredTopics.reduce(
    (total, topic) => total + topic.questions.length,
    0,
  );
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

  // Long technology names (e.g. "Most Frequently Asked JavaScript") need a
  // smaller, more gradual scale so the heading doesn't wrap awkwardly.
  const headingSizeClass =
    technology.length > 20
      ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      : "text-4xl md:text-5xl";

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="container relative mx-auto flex items-start gap-8 px-6">
        {showTopicsSidebar && (
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto border-r pr-4">
              <h3 className="mb-3 px-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Topics
              </h3>
              <nav className="space-y-1 pb-6">
                {topics.map((topic) => (
                  <a
                    key={topic.slug}
                    href={`#${topic.slug}`}
                    className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    <span className="truncate">{topic.title}</span>
                    <span className="shrink-0 text-xs text-muted-foreground/70">
                      {topic.questions.length}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}

        <div className="min-w-0 flex-1">
          <Link
            href="/interview-questions"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All interview questions
          </Link>

          <div
            className={`mt-8 ${showTopicsSidebar ? "max-w-3xl" : "max-w-5xl"} `}
          >
            {showQuestionCount && (
              <Badge className="rounded-full border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-violet-700 dark:text-violet-300">
                {totalQuestions}+ Questions
              </Badge>
            )}

            <h1
              className={`${showQuestionCount ? "mt-6" : ""} font-black leading-tight ${headingSizeClass}`}
            >
              {technology} Interview{" "}
              <span className="bg-gradient-to-r from-[#FBBF24] via-[#ecd9a9] to-[#6366F1]  bg-clip-text text-transparent">
                Questions &amp; Answers
              </span>
            </h1>

            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Curated {technology} interview questions with detailed answers,
              grouped by topic. Search, revise and get interview-ready.
            </p>
          </div>

          {/* Search */}
          {showSearch && (
            <div className="relative mt-10 max-w-3xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                className="h-12 rounded-xl pl-12 text-base"
              />
            </div>
          )}

          {showSearch && isSearching && (
            <p className="mt-4 text-sm text-muted-foreground">
              {visibleCount} result{visibleCount === 1 ? "" : "s"} for &ldquo;
              {query.trim()}&rdquo;
            </p>
          )}

          <div className="mt-10 lg:mt-12">
            {/* List of Questions bar */}
            {showTopicsSidebar && (
              <button
                onClick={() => setListExpanded((v) => !v)}
                className="flex w-full items-center justify-between rounded-xl border bg-card px-5 py-4 text-left transition hover:border-violet-500/40"
              >
                <span className="flex items-center gap-3 text-base font-semibold">
                  List of Questions
                  {showQuestionCount && (
                    <Badge
                      variant="secondary"
                      className="rounded-full px-2.5 py-0.5"
                    >
                      {visibleCount}
                    </Badge>
                  )}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    listExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}

            {/* Filter by difficulty */}
            {showDifficultyFilter && (
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-sm text-muted-foreground">
                  Filter by difficulty:
                </span>
                {DIFFICULTY_FILTERS.map((item) => {
                  const active = difficulty === item.value;
                  return (
                    <button
                      key={item.value}
                      onClick={() => setDifficulty(item.value)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                        active
                          ? "border-violet-500 bg-violet-500 text-white"
                          : "border-border text-muted-foreground hover:border-violet-500/40 hover:text-foreground"
                      }`}
                    >
                      {item.dot ? (
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${item.dot}`}
                        />
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
            )}

            {listExpanded && (
              <div className="mt-10 space-y-2">
                {filteredTopics.map((topic) => (
                  <div
                    key={topic.slug}
                    id={topic.slug}
                    className="scroll-mt-24 pt-8 first:pt-0"
                  >
                    <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FBBF24] dark:text-[#f3c960]">
                      {topic.title}
                    </h2>

                    {topic.questions.map((item, i) => {
                      const questionNumber =
                        topicStartIndex[topic.slug] + i + 1;
                      const anchor = `${topic.slug}-q${questionNumber}`;
                      const meta = DIFFICULTY_META[item.difficulty];
                      return (
                        <div
                          key={anchor}
                          id={anchor}
                          className="scroll-mt-24 border-b border-border/60 py-7 first:pt-0"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-2xl font-bold leading-7">
                              <span className="text-[#FBBF24] dark:text-[#f3c960]">
                                Q{questionNumber}.
                              </span>{" "}
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
                            <Badge
                              variant="outline"
                              className={`gap-1.5 rounded-full ${meta.badge}`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${meta.dot}`}
                              />
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
                    No questions found
                    {isSearching ? ` for "${query.trim()}"` : ""}.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
