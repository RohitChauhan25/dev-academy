import { Tutorial } from '@/app/types/tutorial';

export const gitResetAndRevert: Tutorial = {
  slug: 'git-reset-and-revert',

  title: 'git reset vs git revert',

  description: 'Two different ways to undo commits — one rewrites history, the other adds to it safely.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 21 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'git reset',
      content:
        'git reset moves the current branch pointer to an earlier commit, effectively undoing commits by removing them from the branch\'s history. It comes in three modes that control what happens to the changes those commits contained.',
    },

    {
      type: 'table',
      title: 'Reset Modes',
      headers: ['Mode', 'Working Directory', 'Staging Area', 'Use Case'],
      rows: [
        ['--soft', 'Unchanged', 'Keeps changes staged', 'Undo a commit but keep everything staged to recommit'],
        ['--mixed (default)', 'Unchanged', 'Unstages changes', 'Undo a commit and re-review what to stage'],
        ['--hard', 'Discarded', 'Discarded', 'Completely throw away commits and their changes'],
      ],
    },

    {
      type: 'code',
      title: 'Reset Examples',
      language: 'bash',
      code: `# Undo the last commit, keep changes staged
git reset --soft HEAD~1

# Undo the last commit, unstage the changes (default)
git reset HEAD~1

# Undo the last commit and permanently discard the changes
git reset --hard HEAD~1`,
    },

    {
      type: 'paragraph',
      title: 'git revert',
      content:
        'git revert does the opposite: instead of removing a commit from history, it creates a brand-new commit that undoes the changes of a previous one. History stays intact and forward-moving, which is why revert is the safe choice for anything already pushed and shared.',
    },

    {
      type: 'code',
      title: 'Reverting a Commit',
      language: 'bash',
      code: `git revert a6f92e1

# Creates a new commit: "Revert 'Add login form'"
# The original commit still exists in history`,
    },

    {
      type: 'warning',
      title: 'Never Reset Shared History',
      content:
        'git reset rewrites history by moving the branch pointer, which is dangerous on commits that have already been pushed and pulled by others — their local history will no longer match. Use git revert instead for anything already shared.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'A simple rule: reset for commits that only exist locally and haven\'t been shared; revert for anything already pushed to a shared branch.',
    },
  ],

  quiz: [
    {
      question: 'What does git reset --hard do to uncommitted work in the discarded commits?',
      options: ['Keeps it staged', 'Keeps it unstaged', 'Permanently discards it', 'Emails it to you'],
      answer: 2,
    },
    {
      question: 'How does git revert undo a commit?',
      options: [
        'By deleting it from history',
        'By moving the branch pointer backward',
        'By creating a new commit that reverses its changes',
        'By renaming it',
      ],
      answer: 2,
    },
    {
      question: 'Which command is safer to use on commits that have already been pushed and shared?',
      options: ['git reset --hard', 'git revert', 'git reset --soft', 'They are equally safe'],
      answer: 1,
    },
  ],

  previous: 'undoing-changes',
  next: 'amending-commits',
};
