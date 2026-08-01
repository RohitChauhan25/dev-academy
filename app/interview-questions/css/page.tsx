import type { Metadata } from 'next';
import InterviewQuestionsView, {
  type InterviewTopic,
} from '@/components/ui/interview/InterviewQuestionsView';
import {
  getTechnologyInterviewQuestions,
  getTechnologyTutorials,
} from '@/lib/tutorials';

export const metadata: Metadata = {
  title: 'CSS Interview Questions & Answers',
  description:
    'Curated CSS interview questions with detailed answers — box model, Flexbox, Grid, specificity, responsive design, animations and more.',
};

export default function CssInterviewQuestionsPage() {
  const tutorials = getTechnologyTutorials('css') ?? {};
  const topicList = getTechnologyInterviewQuestions('css') ?? [];
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
      technology="CSS"
      technologySlug="css"
      topics={topics}
      totalQuestions={totalQuestions}
    />
  );
}
