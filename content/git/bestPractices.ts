import { Tutorial } from '@/app/types/tutorial';

export const bestPractices: Tutorial = {
  slug: 'best-practices',

  title: 'Git Best Practices',

  description: 'Conventions for commit messages, branching, and everyday habits that keep a repository healthy.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 28 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'Commit Often, Commit Small',
      content:
        'Small, focused commits are easier to review, easier to revert, and easier to understand months later. A commit should represent one logical change — not "end of day" or "misc fixes".',
    },

    {
      type: 'list',
      title: 'Commit Message Conventions',
      items: [
        'Use an imperative mood: "Add", "Fix", "Remove" — not "Added" or "Fixing"',
        'Keep the summary line under ~50 characters',
        'Explain why in the body, not just what (the diff already shows what)',
        'Consider a prefix convention like feat:, fix:, chore: (Conventional Commits)',
      ],
    },

    {
      type: 'code',
      title: 'Conventional Commit Examples',
      language: 'bash',
      code: `git commit -m "feat: add password reset flow"
git commit -m "fix: prevent duplicate email on signup"
git commit -m "chore: bump dependencies"`,
    },

    {
      type: 'table',
      title: 'Branching Strategy',
      headers: ['Practice', 'Why'],
      rows: [
        ['One branch per feature/fix', 'Keeps changes isolated and easy to review'],
        ['Short-lived branches', 'Reduces the chance of large, painful merge conflicts'],
        ['Descriptive branch names', 'feature/login-form beats a bare login'],
        ['Delete branches after merging', 'Keeps the branch list meaningful'],
      ],
    },

    {
      type: 'warning',
      title: 'Never Commit Secrets',
      content:
        'API keys, passwords, and .env files should never be committed. If one slips in, changing it afterward is not enough — the secret is still visible in history and must be treated as compromised and rotated.',
    },

    {
      type: 'note',
      title: 'Protect Your Main Branch',
      content:
        'On GitHub/GitLab, enable branch protection on main: require pull requests, passing checks, and reviews before merging. This prevents accidental direct pushes and force-pushes to the branch everyone depends on.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Write your commit message as if finishing the sentence "This commit will...". "Fix login redirect loop" reads naturally; "Fixed stuff" does not — and that difference is exactly what future-you will thank you for.',
    },
  ],

  quiz: [
    {
      question: 'What mood should a commit message summary use?',
      options: ['Past tense', 'Imperative ("Add", "Fix")', 'Passive voice', 'Question form'],
      answer: 1,
    },
    {
      question: 'If a secret like an API key is accidentally committed, what should you do?',
      options: [
        'Just delete it in the next commit',
        'Nothing, it is fine once removed',
        'Rotate/change the secret, since it is still visible in history',
        'Rename the branch',
      ],
      answer: 2,
    },
    {
      question: 'What does branch protection on main typically require?',
      options: [
        'Nothing, it just renames the branch',
        'Pull requests, passing checks, and reviews before merging',
        'A paid GitHub plan only',
        'Deleting all other branches',
      ],
      answer: 1,
    },
  ],

  previous: 'git-hooks',
};
