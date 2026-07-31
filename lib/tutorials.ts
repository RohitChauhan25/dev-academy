import { javascriptTutorials } from '@/content/javascript';
import { javascriptInterviewQuestions } from '@/content/javascript/interview-questions';

const tutorials = {
  javascript: javascriptTutorials,
};

const interviewQuestions = {
  javascript: javascriptInterviewQuestions,
};

const technologyLabels: Record<string, string> = {
  javascript: 'JavaScript',
};

export function getTutorial(technology: string, topic: string) {
  return tutorials[technology as keyof typeof tutorials]?.[
    topic as keyof typeof javascriptTutorials
  ];
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
