import { Tutorial } from '@/app/types/tutorial';

export const creatingARepository: Tutorial = {
  slug: 'creating-a-repository',

  title: 'Creating a Repository',

  description: 'Turn any folder into a Git repository with git init, and understand what the .git folder does.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 4 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'git init',
      content:
        'git init turns the current folder into a Git repository by creating a hidden .git subfolder. That folder is where Git stores the entire history, configuration, and metadata for the project — delete it, and the folder goes back to being an ordinary, untracked directory.',
    },

    {
      type: 'code',
      title: 'Initialize a New Repository',
      language: 'bash',
      code: `mkdir my-project
cd my-project
git init

# Output:
# Initialized empty Git repository in /path/to/my-project/.git/`,
    },

    {
      type: 'paragraph',
      title: 'What Lives Inside .git',
      content:
        'The .git folder contains the object database (every version of every file you have ever committed), references to branches and tags, and the repository configuration. You never edit these files directly — every Git command reads and writes to this folder for you.',
    },

    {
      type: 'table',
      title: 'Two Ways to Start a Repository',
      headers: ['Method', 'When to Use'],
      rows: [
        ['git init', 'Starting a brand-new project from scratch, locally'],
        ['git clone <url>', 'Getting a copy of a repository that already exists remotely'],
      ],
    },

    {
      type: 'code',
      title: 'Check Repository Status',
      language: 'bash',
      code: `git status

# On branch main
# No commits yet
# nothing to commit (create/copy files and use "git add" to track)`,
    },

    {
      type: 'warning',
      title: 'One Repository per Project',
      content:
        'Avoid running git init inside a folder that is already inside another Git repository (a "repo within a repo") — it creates confusing, nested .git folders. If you need a repository inside a repository, use a git submodule instead.',
    },
  ],

  quiz: [
    {
      question: 'What does git init create?',
      options: ['A remote repository on GitHub', 'A hidden .git folder in the current directory', 'A new branch', 'A backup zip file'],
      answer: 1,
    },
    {
      question: 'What happens if you delete the .git folder?',
      options: [
        'Nothing changes',
        'The folder stops being a Git repository and loses its history',
        'It uploads the history to GitHub first',
        'Git recreates it automatically',
      ],
      answer: 1,
    },
    {
      question: 'Which command starts tracking a project that already exists on a remote server?',
      options: ['git init', 'git clone', 'git start', 'git pull'],
      answer: 1,
    },
  ],

  previous: 'git-config',
  next: 'git-workflow',
};
