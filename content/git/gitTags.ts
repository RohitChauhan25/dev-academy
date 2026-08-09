import { Tutorial } from '@/app/types/tutorial';

export const gitTags: Tutorial = {
  slug: 'git-tags',

  title: 'Git Tags',

  description: 'Mark specific commits as release points using lightweight and annotated tags.',

  level: 'Advanced',

  readingTime: '8 min',

  lesson: 'Lesson 26 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What Tags Are For',
      content:
        'A tag is a permanent, named pointer to a specific commit — most commonly used to mark release versions like v1.0.0. Unlike branches, tags don\'t move as new commits are added; they stay fixed on the commit they were created at.',
    },

    {
      type: 'code',
      title: 'Creating Tags',
      language: 'bash',
      code: `# Lightweight tag — just a name pointing to a commit
git tag v1.0.0

# Annotated tag — includes a message, tagger, and date (recommended for releases)
git tag -a v1.0.0 -m "First stable release"`,
    },

    {
      type: 'table',
      title: 'Lightweight vs Annotated',
      headers: ['Type', 'Stores'],
      rows: [
        ['Lightweight', 'Just a name pointing to a commit'],
        ['Annotated', 'Name, message, tagger name, email, and date — a full Git object'],
      ],
    },

    {
      type: 'code',
      title: 'Working with Tags',
      language: 'bash',
      code: `# List all tags
git tag

# Tag an older, specific commit
git tag -a v0.9.0 a6f92e1 -m "Beta release"

# Push a tag to the remote (tags are not pushed by default)
git push origin v1.0.0

# Push all tags at once
git push origin --tags

# Delete a tag
git tag -d v0.9.0`,
    },

    {
      type: 'note',
      title: 'Tags Are Not Pushed Automatically',
      content:
        'Unlike commits, tags do not travel with a normal git push — you need git push origin <tag> or --tags to explicitly send them to the remote.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use annotated tags for anything meant to represent a real release — they carry more information and are treated as proper, signed-capable objects, unlike lightweight tags.',
    },
  ],

  quiz: [
    {
      question: 'How does a tag differ from a branch?',
      options: [
        'Tags move forward automatically with new commits, branches don\'t',
        'Tags stay fixed on the commit they were created at; branches move forward',
        'Tags can only be created on main',
        'There is no difference',
      ],
      answer: 1,
    },
    {
      question: 'What does an annotated tag store that a lightweight tag does not?',
      options: ['Nothing extra', 'A message, tagger, and date', 'The full file history', 'A remote URL'],
      answer: 1,
    },
    {
      question: 'Are tags pushed to a remote automatically with a normal git push?',
      options: ['Yes, always', 'No, they must be pushed explicitly', 'Only annotated tags', 'Only on main'],
      answer: 1,
    },
  ],

  previous: 'cherry-picking',
  next: 'git-hooks',
};
