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
  const topicList = getTechnologyInterviewQuestions('javascript') ?? [];
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
      technology="JavaScript"
      topics={topics}
      totalQuestions={totalQuestions}
    />
  );
}
