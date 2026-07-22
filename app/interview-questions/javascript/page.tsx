import type { Metadata } from 'next';
import InterviewQuestionsView, {
  type InterviewTopic,
} from '@/components/ui/interview/InterviewQuestionsView';
import {
  getTechnologyInterviewQuestions,
  getTechnologyTutorials,
} from '@/lib/tutorials';

export const metadata: Metadata = {
  title: 'JavaScript Interview Questions & Answers',
  description:
    'Curated JavaScript interview questions with detailed answers — closures, promises, event loop, DOM, async/await, hoisting and more.',
};

export default function JavaScriptInterviewQuestionsPage() {
  const tutorials = getTechnologyTutorials('javascript') ?? {};
  const questionsBySlug = getTechnologyInterviewQuestions('javascript') ?? {};

  const topics: InterviewTopic[] = Object.values(tutorials)
    .filter((tutorial: any) => questionsBySlug[tutorial.slug]?.length)
    .map((tutorial: any) => ({
      title: tutorial.title,
      slug: tutorial.slug,
      questions: questionsBySlug[tutorial.slug],
    }));

  const totalQuestions = topics.reduce(
    (total, topic) => total + topic.questions.length,
    0,
  );

  return (
    <InterviewQuestionsView
      technology="JavaScript"
      topics={topics}
      totalQuestions={totalQuestions}
    />
  );
}
