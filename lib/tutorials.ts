import { javascriptTutorials } from '@/content/javascript';
import { javascriptInterviewQuestions } from '@/content/javascript/interview-questions';
import { mostAskedJavascriptInterviewQuestions } from '@/content/most-asked-javascript/interview-questions';
import { htmlTutorials } from '@/content/html';
import { htmlInterviewQuestions } from '@/content/html/interview-questions';
import { cssTutorials } from '@/content/css';
import { cssInterviewQuestions } from '@/content/css/interview-questions';
import { typescriptTutorials } from '@/content/typescript';
import { typescriptInterviewQuestions } from '@/content/typescript/interview-questions';
import { reactTutorials } from '@/content/react';
import { reactInterviewQuestions } from '@/content/react/interview-questions';
import { gitTutorials } from '@/content/git';
import { gitInterviewQuestions } from '@/content/git/interview-questions';
import { dockerTutorials } from '@/content/docker';
import { dockerInterviewQuestions } from '@/content/docker/interview-questions';
import { mongodbTutorials } from '@/content/mongodb';
import { mongodbInterviewQuestions } from '@/content/mongodb/interview-questions';
import { sqlTutorials } from '@/content/sql';
import { sqlInterviewQuestions } from '@/content/sql/interview-questions';
import { nodejsTutorials } from '@/content/nodejs';
import { nodejsInterviewQuestions } from '@/content/nodejs/interview-questions';

const tutorials = {
  javascript: javascriptTutorials,
  html: htmlTutorials,
  css: cssTutorials,
  typescript: typescriptTutorials,
  react: reactTutorials,
  git: gitTutorials,
  docker: dockerTutorials,
  mongodb: mongodbTutorials,
  sql: sqlTutorials,
  nodejs: nodejsTutorials,
};

const interviewQuestions = {
  'most-asked-javascript': mostAskedJavascriptInterviewQuestions,
  javascript: javascriptInterviewQuestions,
  html: htmlInterviewQuestions,
  css: cssInterviewQuestions,
  typescript: typescriptInterviewQuestions,
  react: reactInterviewQuestions,
  git: gitInterviewQuestions,
  docker: dockerInterviewQuestions,
  mongodb: mongodbInterviewQuestions,
  sql: sqlInterviewQuestions,
  nodejs: nodejsInterviewQuestions,
};

const technologyLabels: Record<string, string> = {
  'most-asked-javascript': 'Most Frequently Asked JavaScript',
  javascript: 'JavaScript',
  html: 'HTML',
  css: 'CSS',
  typescript: 'TypeScript',
  react: 'React',
  git: 'Git',
  docker: 'Docker',
  mongodb: 'MongoDB',
  sql: 'SQL',
  nodejs: 'Node.js',
};

export function getTutorial(technology: string, topic: string) {
  const technologyTutorials = tutorials[technology as keyof typeof tutorials];
  return technologyTutorials?.[topic as keyof typeof technologyTutorials];
}

export function getTechnologyTutorials(technology: string) {
  return tutorials[technology as keyof typeof tutorials];
}

export function getInterviewQuestions(technology: string, topic: string) {
  const topics = interviewQuestions[technology as keyof typeof interviewQuestions];
  return topics?.find((t) => t.slug === topic)?.questions;
}

export function getTechnologyInterviewQuestions(technology: string) {
  return interviewQuestions[technology as keyof typeof interviewQuestions];
}

export function slugifyLevel(level: string) {
  return level.toLowerCase().replace(/\s+/g, '-');
}

export function getTechnologyLabel(technology: string) {
  return technologyLabels[technology] ?? technology;
}

export function getTechnologies() {
  return Object.entries(technologyLabels)
    .filter(([id]) => id !== 'most-asked-javascript')
    .map(([id, label]) => ({ id, label }));
}

export function getTopicsForTechnology(technology: string) {
  const technologyTutorials = tutorials[technology as keyof typeof tutorials];
  if (!technologyTutorials) return [];

  return Object.values(technologyTutorials).map((t) => ({
    slug: t.slug,
    title: t.title,
  }));
}
