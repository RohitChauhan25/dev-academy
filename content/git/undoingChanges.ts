import { Tutorial } from '@/app/types/tutorial';

export const undoingChanges: Tutorial = {
  slug: 'undoing-changes',

  title: 'Undoing Changes',

  description: 'Discard unwanted edits in the working directory and staging area before they are committed.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 20 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'git restore',
      content:
        'git restore is the modern command for discarding changes. It can throw away edits in the working directory, or unstage a file, depending on the flags you use — it deliberately replaced the more confusing dual role that git checkout used to play.',
    },

    {
      type: 'code',
      title: 'Discarding Working Directory Changes',
      language: 'bash',
      code: `# Discard uncommitted edits to a single file, reverting to the last commit
git restore app.js

# Discard uncommitted edits to every file
git restore .`,
    },

    {
      type: 'code',
      title: 'Unstaging a File',
      language: 'bash',
      code: `# Move a file out of the staging area, keeping its edits
git restore --staged app.js`,
    },

    {
      type: 'table',
      title: 'Restore Cheat Sheet',
      headers: ['Command', 'Effect'],
      rows: [
        ['git restore <file>', 'Discard unstaged edits, back to last commit'],
        ['git restore --staged <file>', 'Unstage, but keep the edits'],
        ['git restore --staged --worktree <file>', 'Unstage and discard the edits entirely'],
      ],
    },

    {
      type: 'warning',
      title: 'Discarding is Permanent',
      content:
        'git restore <file> cannot be undone — the edits are gone, not just unstaged. Double-check with git diff before discarding anything you are not certain about.',
    },

    {
      type: 'code',
      title: 'Removing an Untracked File',
      language: 'bash',
      code: `# Preview what would be deleted
git clean -n

# Actually delete untracked files
git clean -f`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'If you\'re not sure you want to discard something permanently, git stash it instead — a stash can always be dropped later, but a restored/discarded change is gone immediately.',
    },
  ],

  quiz: [
    {
      question: 'What does git restore <file> do?',
      options: [
        'Unstages the file only',
        'Discards uncommitted edits, reverting to the last commit',
        'Deletes the file permanently from history',
        'Creates a new branch',
      ],
      answer: 1,
    },
    {
      question: 'Which command unstages a file while keeping its edits?',
      options: ['git restore <file>', 'git restore --staged <file>', 'git reset --hard', 'git clean -f'],
      answer: 1,
    },
    {
      question: 'What does git clean -n do?',
      options: [
        'Deletes untracked files immediately',
        'Previews which untracked files would be deleted, without deleting them',
        'Cleans the staging area',
        'Removes all branches',
      ],
      answer: 1,
    },
  ],

  previous: 'git-stash',
  next: 'git-reset-and-revert',
};
