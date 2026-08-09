import type { Metadata } from 'next';
import InterviewQuestionsView, {
  type InterviewTopic,
} from '@/components/ui/interview/InterviewQuestionsView';
import {
  getTechnologyInterviewQuestions,
  getTechnologyTutorials,
} from '@/lib/tutorials';

export const metadata: Metadata = {
  title: 'Most Frequently Asked JavaScript Interview Questions',
  description:
    'The JavaScript interview questions you are most likely to be asked, with detailed explanations — hoisting, closures, this, the event loop, promises and more.',
};

export default function MostAskedJavaScriptInterviewQuestionsPage() {
  const tutorials = getTechnologyTutorials('most-asked-javascript') ?? {};
  const topicList = getTechnologyInterviewQuestions('most-asked-javascript') ?? [];
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
      technology="Most Frequently Asked JavaScript"
      technologySlug="most-asked-javascript"
      topics={topics}
      totalQuestions={totalQuestions}
      showTopicsSidebar={false}
      showSearch={false}
      showDifficultyFilter={false}
      showQuestionCount={false}
    />
  );
}
