import { Tutorial } from '@/app/types/tutorial';

export const mergeConflicts: Tutorial = {
  slug: 'merge-conflicts',

  title: 'Resolving Merge Conflicts',

  description: 'Understand why conflicts happen and how to resolve them by hand.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 13 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Conflicts Happen',
      content:
        'A conflict happens when Git cannot automatically decide how to combine two changes — most commonly when both branches edited the same lines of the same file differently. Git pauses the merge and asks you to resolve it manually.',
    },

    {
      type: 'code',
      title: 'What a Conflict Looks Like',
      language: 'bash',
      code: `<<<<<<< HEAD
const greeting = "Hello there";
=======
const greeting = "Hi there";
>>>>>>> feature/greeting`,
    },

    {
      type: 'table',
      title: 'Conflict Markers',
      headers: ['Marker', 'Meaning'],
      rows: [
        ['<<<<<<< HEAD', 'Start of your current branch\'s version'],
        ['=======', 'Divider between the two versions'],
        ['>>>>>>> branch-name', 'End of the incoming branch\'s version'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Resolving a Conflict',
      content:
        'Open each conflicted file, decide what the final content should be (one side, the other, or a blend of both), and delete the conflict markers entirely. Then stage the file and continue the merge.',
    },

    {
      type: 'code',
      title: 'Finishing the Merge',
      language: 'bash',
      code: `git status
# both modified: greeting.js

# after manually editing greeting.js to resolve it:
git add greeting.js
git commit
# Git pre-fills a "Merge branch..." message`,
    },

    {
      type: 'warning',
      title: 'You Can Always Back Out',
      content:
        'If a merge conflict looks overwhelming, git merge --abort cancels the merge entirely and returns your branch to the state it was in before you ran git merge. Nothing is lost.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Merge main into your feature branch often, in small increments, rather than once at the very end — small, frequent conflicts are far easier to resolve than one enormous conflict after weeks of divergence.',
    },
  ],

  quiz: [
    {
      question: 'When does a merge conflict occur?',
      options: [
        'Whenever you run git merge',
        'When Git cannot automatically combine changes, usually to the same lines',
        'Only when merging with GitHub',
        'When a branch has no commits',
      ],
      answer: 1,
    },
    {
      question: 'What do the <<<<<<< and >>>>>>> markers represent?',
      options: [
        'Errors in the file',
        'The boundaries of the two conflicting versions',
        'Deleted lines',
        'Comments added by Git',
      ],
      answer: 1,
    },
    {
      question: 'Which command cancels an in-progress merge and returns to the pre-merge state?',
      options: ['git merge --cancel', 'git reset --hard', 'git merge --abort', 'git checkout --abort'],
      answer: 2,
    },
  ],

  previous: 'git-merge',
  next: 'remote-repositories',
};
