import type { Metadata } from 'next';
import InterviewQuestionsView, {
  type InterviewTopic,
} from '@/components/ui/interview/InterviewQuestionsView';
import {
  getTechnologyInterviewQuestions,
  getTechnologyTutorials,
} from '@/lib/tutorials';

export const metadata: Metadata = {
  title: 'TypeScript Interview Questions & Answers',
  description:
    'Curated TypeScript interview questions with detailed answers — generics, utility types, interfaces, narrowing, decorators and more.',
};

export default function TypeScriptInterviewQuestionsPage() {
  const tutorials = getTechnologyTutorials('typescript') ?? {};
  const topicList = getTechnologyInterviewQuestions('typescript') ?? [];
  const tutorialSlugs = new Set(Object.keys(tutorials));

  const topics: InterviewTopic[] = topicList
    .filter((topic) => topic.questions.length > 0)
    .map((topic) => ({
      title: topic.title,
      slug: topic.slug,
      questions: topic.questions,
      hasTutorial: tutorialSlugs.has(topic.slug),
    }));

  const totalQuestions = topics.reduce(
    (total, topic) => total + topic.questions.length,
    0,
  );

  return (
    <InterviewQuestionsView
      technology="TypeScript"
      technologySlug="typescript"
      topics={topics}
      totalQuestions={totalQuestions}
    />
  );
}
