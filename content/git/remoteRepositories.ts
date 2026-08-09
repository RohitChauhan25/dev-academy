import { Tutorial } from '@/app/types/tutorial';

export const remoteRepositories: Tutorial = {
  slug: 'remote-repositories',

  title: 'Remote Repositories',

  description: 'Connect your local repository to a remote one, like GitHub, and manage remote references.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 14 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Remote?',
      content:
        'A remote is simply a named URL pointing to another copy of your repository, usually hosted on a service like GitHub. Local Git and the remote stay in sync only when you explicitly push or pull — nothing syncs automatically.',
    },

    {
      type: 'code',
      title: 'Adding a Remote',
      language: 'bash',
      code: `git remote add origin https://github.com/username/my-project.git

# List configured remotes
git remote -v
# origin  https://github.com/username/my-project.git (fetch)
# origin  https://github.com/username/my-project.git (push)`,
    },

    {
      type: 'table',
      title: 'Remote Commands',
      headers: ['Command', 'Effect'],
      rows: [
        ['git remote -v', 'List remotes with their URLs'],
        ['git remote add <name> <url>', 'Add a new remote'],
        ['git remote remove <name>', 'Remove a remote'],
        ['git remote rename <old> <new>', 'Rename a remote'],
      ],
    },

    {
      type: 'note',
      title: 'Why "origin"?',
      content:
        '"origin" is just a convention, not a keyword — it is the default name Git gives the remote you cloned from. You could name it anything, and larger projects sometimes have multiple remotes, like origin and upstream.',
    },

    {
      type: 'code',
      title: 'Changing a Remote URL',
      language: 'bash',
      code: `git remote set-url origin git@github.com:username/my-project.git`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use SSH URLs (git@github.com:...) instead of HTTPS once you have SSH keys set up — you will never be prompted for a password or personal access token again.',
    },
  ],

  quiz: [
    {
      question: 'What is a Git remote?',
      options: [
        'A branch that cannot be deleted',
        'A named URL pointing to another copy of the repository',
        'A backup stored locally',
        'A type of merge conflict',
      ],
      answer: 1,
    },
    {
      question: 'Does Git automatically sync with a remote?',
      options: ['Yes, every few minutes', 'Yes, on every commit', 'No, only when you push or pull', 'Only on Windows'],
      answer: 2,
    },
    {
      question: 'Which command lists configured remotes and their URLs?',
      options: ['git remote -v', 'git remote list', 'git show remotes', 'git branch -r'],
      answer: 0,
    },
  ],

  previous: 'merge-conflicts',
  next: 'git-clone',
};
