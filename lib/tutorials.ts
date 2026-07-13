import { javascriptTutorials } from '@/content/javascript';

const tutorials = {
  javascript: javascriptTutorials,
};

export function getTutorial(technology: string, topic: string) {
  return tutorials[technology as keyof typeof tutorials]?.[
    topic as keyof typeof javascriptTutorials
  ];
}
