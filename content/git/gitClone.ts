import { Tutorial } from '@/app/types/tutorial';

export const gitClone: Tutorial = {
  slug: 'git-clone',

  title: 'Cloning a Repository',

  description: 'Get a full local copy of an existing remote repository with git clone.',

  level: 'Intermediate',

  readingTime: '8 min',

  lesson: 'Lesson 15 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What git clone Does',
      content:
        'git clone downloads a complete copy of a remote repository — every commit, branch, and tag in its history — into a new folder on your machine. It also automatically sets up that remote as "origin" so you can push and pull right away.',
    },

    {
      type: 'code',
      title: 'Cloning a Repository',
      language: 'bash',
      code: `git clone https://github.com/username/my-project.git

# Creates a new folder "my-project" and sets origin automatically
cd my-project
git remote -v
# origin  https://github.com/username/my-project.git (fetch)
# origin  https://github.com/username/my-project.git (push)`,
    },

    {
      type: 'table',
      title: 'Useful Clone Options',
      headers: ['Option', 'Effect'],
      rows: [
        ['git clone <url> custom-folder', 'Clone into a folder with a custom name'],
        ['git clone --depth 1 <url>', 'Shallow clone — only the latest commit, faster for huge repos'],
        ['git clone -b <branch> <url>', 'Clone and check out a specific branch immediately'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Clone vs Init',
      content:
        'Use git clone when a project already exists remotely and you want a working copy. Use git init when you are starting something brand new that does not exist anywhere yet.',
    },

    {
      type: 'note',
      title: 'You Get the Full History',
      content:
        'Because Git is distributed, cloning gives you the entire commit history, not just the latest snapshot. You can browse the full log, check out any past commit, and work fully offline immediately after cloning.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For huge, old repositories where you only need to build the current code and don\'t need the full history, --depth 1 makes cloning dramatically faster.',
    },
  ],

  quiz: [
    {
      question: 'What does git clone give you?',
      options: [
        'Only the latest file versions, no history',
        'A complete local copy of the repository, including its history',
        'Read-only access to the remote',
        'A compressed zip of the source code',
      ],
      answer: 1,
    },
    {
      question: 'What remote name does git clone set up automatically?',
      options: ['source', 'main', 'origin', 'remote'],
      answer: 2,
    },
    {
      question: 'When should you use git init instead of git clone?',
      options: [
        'When the project already exists remotely',
        'When starting a brand-new project with no existing remote',
        'When you want to skip creating a .git folder',
        'Never — clone always works',
      ],
      answer: 1,
    },
  ],

  previous: 'remote-repositories',
  next: 'git-push-and-pull',
};
