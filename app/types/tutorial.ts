export interface ParagraphSection {
  type: 'paragraph';
  title: string;
  content: string;
}

export interface CodeSection {
  type: 'code';
  title: string;
  language: string;
  code: string;
}

export interface ListSection {
  type: 'list';
  title: string;
  items: string[];
}

export interface TableSection {
  type: 'table';
  title: string;
  headers: string[];
  rows: string[][];
}

export interface NoteSection {
  type: 'note';
  title: string;
  content: string;
}

export interface TipSection {
  type: 'tip';
  title: string;
  content: string;
}

export interface WarningSection {
  type: 'warning';
  title: string;
  content: string;
}

export interface ImageSection {
  type: 'image';
  title: string;
  src: string;
  alt: string;
}

export type TutorialSection =
  | ParagraphSection
  | CodeSection
  | ListSection
  | TableSection
  | NoteSection
  | TipSection
  | WarningSection
  | ImageSection;

export interface InterviewQuestion {
  question: string;
  answer: string;
}

export interface Tutorial {
  slug: string;

  title: string;

  description: string;

  level: string;

  readingTime: string;

  lesson: string;

  sections: TutorialSection[];

  quiz?: {
    question: string;
    code?: string;
    options: string[];
    answer: number;
  }[];

  previous?: string;

  next?: string;
}
