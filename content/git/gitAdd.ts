import { Tutorial } from '@/app/types/tutorial';

export const gitAdd: Tutorial = {
  slug: 'git-add',

  title: 'Staging Changes',

  description: 'Use git add to move changes from the working directory into the staging area.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 6 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What git add Does',
      content:
        'git add tells Git "include this change in the next commit." It does not create a commit by itself — it only stages the change, snapshotting the file\'s current content into the index so it is ready to be committed.',
    },

    {
      type: 'code',
      title: 'Staging Files',
      language: 'bash',
      code: `# Stage a single file
git add index.html

# Stage multiple specific files
git add index.html style.css

# Stage everything that changed
git add .

# Stage all tracked files, project-wide, from any subfolder
git add -A`,
    },

    {
      type: 'table',
      title: 'Common Variants',
      headers: ['Command', 'Effect'],
      rows: [
        ['git add <file>', 'Stage one specific file'],
        ['git add .', 'Stage all changes in the current directory and below'],
        ['git add -A', 'Stage all changes in the entire repository, including deletions'],
        ['git add -p', 'Interactively choose which parts (hunks) of a file to stage'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Staging is a Snapshot, Not a Link',
      content:
        'A common surprise: if you git add a file and then keep editing it, the staging area still holds the version at the moment you staged it. Running git commit now would commit that older staged version, not your latest edits — you would need to git add again.',
    },

    {
      type: 'code',
      title: 'Unstaging a File',
      language: 'bash',
      code: `# Move a file back out of the staging area (keeps the edits)
git restore --staged app.js`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer staging specific files or using git add -p over blindly running git add . — it forces you to think about what actually belongs in each commit, which keeps history readable.',
    },
  ],

  quiz: [
    {
      question: 'What does git add actually do?',
      options: [
        'Creates a new commit',
        'Moves a change into the staging area',
        'Uploads changes to GitHub',
        'Deletes a file from the working directory',
      ],
      answer: 1,
    },
    {
      question: 'If you stage a file and then edit it again, what happens on the next commit?',
      options: [
        'Git automatically re-stages the new edits',
        'The commit fails with an error',
        'The commit includes the older, previously staged version unless you git add again',
        'Git discards the earlier staged version',
      ],
      answer: 2,
    },
    {
      question: 'Which command removes a file from the staging area without discarding its edits?',
      options: ['git remove', 'git restore --staged <file>', 'git unstage', 'git reset --hard'],
      answer: 1,
    },
  ],

  previous: 'git-workflow',
  next: 'git-commit',
};
