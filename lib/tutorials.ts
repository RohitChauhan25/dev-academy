import { javascriptTutorials } from '@/content/javascript';
import { javascriptInterviewQuestions } from '@/content/javascript/interview-questions';
import { htmlTutorials } from '@/content/html';
import { htmlInterviewQuestions } from '@/content/html/interview-questions';
import { cssTutorials } from '@/content/css';
import { cssInterviewQuestions } from '@/content/css/interview-questions';
import { typescriptTutorials } from '@/content/typescript';
import { typescriptInterviewQuestions } from '@/content/typescript/interview-questions';
import { reactTutorials } from '@/content/react';
import { reactInterviewQuestions } from '@/content/react/interview-questions';

const tutorials = {
  javascript: javascriptTutorials,
  html: htmlTutorials,
  css: cssTutorials,
  typescript: typescriptTutorials,
  react: reactTutorials,
};

const interviewQuestions = {
  javascript: javascriptInterviewQuestions,
  html: htmlInterviewQuestions,
  css: cssInterviewQuestions,
  typescript: typescriptInterviewQuestions,
  react: reactInterviewQuestions,
};

const technologyLabels: Record<string, string> = {
  javascript: 'JavaScript',
  html: 'HTML',
  css: 'CSS',
  typescript: 'TypeScript',
  react: 'React',
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
