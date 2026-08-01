import type { Metadata } from 'next';
import InterviewQuestionsView, {
  type InterviewTopic,
} from '@/components/ui/interview/InterviewQuestionsView';
import {
  getTechnologyInterviewQuestions,
  getTechnologyTutorials,
} from '@/lib/tutorials';

export const metadata: Metadata = {
  title: 'HTML Interview Questions & Answers',
  description:
    'Curated HTML interview questions with detailed answers — semantic markup, forms, accessibility, tables, media and more.',
};

export default function HtmlInterviewQuestionsPage() {
  const tutorials = getTechnologyTutorials('html') ?? {};
  const topicList = getTechnologyInterviewQuestions('html') ?? [];
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
      technology="HTML"
      technologySlug="html"
      topics={topics}
      totalQuestions={totalQuestions}
    />
  );
}
