import { Tutorial } from '@/app/types/tutorial';

export const pullRequestsAndForking: Tutorial = {
  slug: 'pull-requests-and-forking',

  title: 'Pull Requests & Forking',

  description: 'Understand the fork-and-pull-request workflow used to contribute to shared and open-source projects.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 18 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Fork?',
      content:
        'A fork is your own personal copy of someone else\'s repository, hosted under your own account. It is a GitHub-level (not Git-level) concept — forking lets you freely experiment and make changes without needing write access to the original repository.',
    },

    {
      type: 'paragraph',
      title: 'What is a Pull Request?',
      content:
        'A pull request (PR) is a request to merge changes from one branch (often on your fork) into another (usually the original repository\'s main branch). It gives maintainers a place to review the diff, leave comments, and discuss the change before merging.',
    },

    {
      type: 'table',
      title: 'The Fork-and-PR Workflow',
      headers: ['Step', 'Action'],
      rows: [
        ['1', 'Fork the repository on GitHub'],
        ['2', 'Clone your fork locally'],
        ['3', 'Create a feature branch and make changes'],
        ['4', 'Push the branch to your fork'],
        ['5', 'Open a pull request against the original repository'],
      ],
    },

    {
      type: 'code',
      title: 'Keeping a Fork Up to Date',
      language: 'bash',
      code: `# Add the original repo as a second remote, conventionally named "upstream"
git remote add upstream https://github.com/original-owner/project.git

# Pull the latest changes from the original project
git fetch upstream
git merge upstream/main`,
    },

    {
      type: 'note',
      title: 'Not Every Team Uses Forks',
      content:
        'On private company repositories, it is common for everyone to have push access directly and skip forking — you just push a feature branch to the same repository and open a PR from branch to branch. Forking is mainly used for open-source contributions or when you lack write access.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Keep pull requests small and focused on one change. Small PRs get reviewed faster and are far easier to revert if something turns out to be wrong.',
    },
  ],

  quiz: [
    {
      question: 'What is a fork?',
      options: [
        'A type of merge conflict',
        'Your own personal copy of someone else\'s repository',
        'A Git branch',
        'A deleted commit',
      ],
      answer: 1,
    },
    {
      question: 'What is a pull request used for?',
      options: [
        'Deleting a branch',
        'Requesting review and merge of changes from one branch into another',
        'Downloading a repository',
        'Renaming a repository',
      ],
      answer: 1,
    },
    {
      question: 'What is the conventional name for the remote pointing to the original repository you forked from?',
      options: ['origin', 'upstream', 'source', 'main'],
      answer: 1,
    },
  ],

  previous: 'git-fetch',
  next: 'git-stash',
};
