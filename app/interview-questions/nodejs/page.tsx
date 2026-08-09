import type { Metadata } from 'next';
import InterviewQuestionsView, {
  type InterviewTopic,
} from '@/components/ui/interview/InterviewQuestionsView';
import {
  getTechnologyInterviewQuestions,
  getTechnologyTutorials,
} from '@/lib/tutorials';

export const metadata: Metadata = {
  title: 'Node.js Interview Questions & Answers',
  description:
    'Curated Node.js interview questions with detailed answers — event loop, streams, Express, authentication, REST APIs and more.',
};

export default function NodejsInterviewQuestionsPage() {
  const tutorials = getTechnologyTutorials('nodejs') ?? {};
  const topicList = getTechnologyInterviewQuestions('nodejs') ?? [];
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
      technology="Node.js"
      technologySlug="nodejs"
      topics={topics}
      totalQuestions={totalQuestions}
    />
  );
}
