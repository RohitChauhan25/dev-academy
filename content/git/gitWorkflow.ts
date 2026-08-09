import { Tutorial } from '@/app/types/tutorial';

export const gitWorkflow: Tutorial = {
  slug: 'git-workflow',

  title: 'The Git Workflow',

  description: 'Understand the three areas every Git change passes through: working directory, staging area, and repository.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 5 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'Three Areas',
      content:
        'Every file in a Git project moves through three areas. Understanding this flow is the single most important mental model in Git — almost every command either moves a change between these areas or inspects where it currently sits.',
    },

    {
      type: 'table',
      title: 'The Three Areas',
      headers: ['Area', 'What It Holds'],
      rows: [
        ['Working Directory', 'The actual files on disk that you edit'],
        ['Staging Area (Index)', 'Changes marked as ready to be committed'],
        ['Repository (.git)', 'Permanently committed snapshots of the project'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Moving Between Areas',
      content:
        'You edit a file in the working directory. Running git add moves that change into the staging area. Running git commit takes everything in the staging area and permanently records it as a new snapshot in the repository.',
    },

    {
      type: 'code',
      title: 'The Basic Flow',
      language: 'bash',
      code: `# 1. Edit a file (working directory)
echo "console.log('hi')" > app.js

# 2. Stage it (staging area)
git add app.js

# 3. Commit it (repository)
git commit -m "Add hello world script"`,
    },

    {
      type: 'note',
      title: 'Why a Staging Area?',
      content:
        'The staging area lets you build a commit deliberately. If you changed five files but only want three of them in this commit, you stage just those three — the other two stay in the working directory, untouched by the commit.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Run git status often. It tells you exactly which files are in which area, which is the fastest way to build the right mental model of the three-area workflow while you are still learning it.',
    },
  ],

  quiz: [
    {
      question: 'Which command moves a change from the working directory to the staging area?',
      options: ['git commit', 'git add', 'git push', 'git stage'],
      answer: 1,
    },
    {
      question: 'What does the staging area let you do?',
      options: [
        'Delete commits permanently',
        'Choose exactly which changes go into the next commit',
        'Connect to a remote server',
        'Undo the last five commits at once',
      ],
      answer: 1,
    },
    {
      question: 'Which command permanently records staged changes into the repository?',
      options: ['git save', 'git add', 'git commit', 'git snapshot'],
      answer: 2,
    },
  ],

  previous: 'creating-a-repository',
  next: 'git-add',
};
