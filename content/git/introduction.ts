import { Tutorial } from '@/app/types/tutorial';

export const introduction: Tutorial = {
  slug: 'introduction',

  title: 'Git Introduction',

  description:
    'Understand what Git is, why version control matters, and how Git differs from older version control systems.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 1 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Git?',
      content:
        'Git is a distributed version control system that tracks changes to files over time. It lets you record snapshots of your project as you work, jump back to any previous snapshot, and collaborate with other people without overwriting each other\'s work. Git was created by Linus Torvalds in 2005 to manage the Linux kernel source code.',
    },

    {
      type: 'paragraph',
      title: 'Why Version Control?',
      content:
        'Without version control, teams end up emailing zip files around or keeping folders named "final", "final-v2", and "final-really-final". Version control replaces that chaos with a searchable history: who changed what, when, and why — with the ability to undo any change safely.',
    },

    {
      type: 'table',
      title: 'What Git Gives You',
      headers: ['Capability', 'Description'],
      rows: [
        ['History', 'A complete, searchable log of every change ever made'],
        ['Branching', 'Work on features in isolation without affecting other code'],
        ['Collaboration', 'Multiple people can work on the same project safely'],
        ['Backup', 'Every clone is a full copy of the project history'],
        ['Undo', 'Any change can be inspected, reverted, or recovered'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Distributed, Not Centralized',
      content:
        'Older systems like SVN kept one central copy of the history on a server — you needed a network connection to see history or commit. Git is distributed: every developer has a full copy of the entire project history on their own machine. Commits happen locally and instantly; you only need the network to sync with others.',
    },

    {
      type: 'code',
      title: 'Check Your Git Version',
      language: 'bash',
      code: `git --version
# git version 2.43.0`,
    },

    {
      type: 'note',
      title: 'Git vs GitHub',
      content:
        'Git is the version control tool that runs on your computer. GitHub (along with GitLab, Bitbucket, etc.) is a hosting service for Git repositories — it adds a web UI, pull requests, issue tracking, and collaboration features on top of Git.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Every serious software project should use version control from the very first commit — even solo projects. It costs almost nothing to set up and pays off the first time you need to undo a mistake.',
    },
  ],

  quiz: [
    {
      question: 'Who created Git?',
      options: ['Linus Torvalds', 'Guido van Rossum', 'Brendan Eich', 'James Gosling'],
      answer: 0,
    },
    {
      question: 'What kind of version control system is Git?',
      options: ['Centralized', 'Distributed', 'Cloud-only', 'File-based'],
      answer: 1,
    },
    {
      question: 'What is the relationship between Git and GitHub?',
      options: [
        'They are the same tool',
        'GitHub is a hosting service built around Git',
        'Git is a plugin for GitHub',
        'GitHub replaced Git in 2010',
      ],
      answer: 1,
    },
  ],

  next: 'installation-and-setup',
};
