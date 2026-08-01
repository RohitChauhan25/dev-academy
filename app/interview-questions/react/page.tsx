import type { Metadata } from 'next';
import InterviewQuestionsView, {
  type InterviewTopic,
} from '@/components/ui/interview/InterviewQuestionsView';
import {
  getTechnologyInterviewQuestions,
  getTechnologyTutorials,
} from '@/lib/tutorials';

export const metadata: Metadata = {
  title: 'React Interview Questions & Answers',
  description:
    'Curated React interview questions with detailed answers — hooks, context, performance, Server Components, testing and more.',
};

export default function ReactInterviewQuestionsPage() {
  const tutorials = getTechnologyTutorials('react') ?? {};
  const topicList = getTechnologyInterviewQuestions('react') ?? [];
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
      technology="React"
      technologySlug="react"
      topics={topics}
      totalQuestions={totalQuestions}
    />
  );
}
