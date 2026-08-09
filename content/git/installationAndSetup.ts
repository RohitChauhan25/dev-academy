import { Tutorial } from '@/app/types/tutorial';

export const installationAndSetup: Tutorial = {
  slug: 'installation-and-setup',

  title: 'Installation & Setup',

  description: 'Install Git on your operating system and confirm it is working.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 2 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'Installing Git',
      content:
        'Git runs on Windows, macOS, and Linux. Most Linux distributions and macOS already have Git installed or make it available through the system package manager. Windows users typically install "Git for Windows", which also includes Git Bash, a Unix-style terminal.',
    },

    {
      type: 'table',
      title: 'Installation by Platform',
      headers: ['Platform', 'Command / Source'],
      rows: [
        ['macOS', 'brew install git (or the Xcode Command Line Tools)'],
        ['Ubuntu / Debian', 'sudo apt install git'],
        ['Fedora', 'sudo dnf install git'],
        ['Windows', 'Download the installer from git-scm.com'],
      ],
    },

    {
      type: 'code',
      title: 'Verify the Installation',
      language: 'bash',
      code: `git --version
# git version 2.43.0`,
    },

    {
      type: 'paragraph',
      title: 'Choosing an Interface',
      content:
        'Git is a command-line tool at heart, and every GUI (GitHub Desktop, GitKraken, VS Code\'s Source Control panel) ultimately runs the same underlying commands. Learning the CLI first makes every GUI easier to understand later, because you know what it is actually doing.',
    },

    {
      type: 'note',
      title: 'Git Bash on Windows',
      content:
        'Git Bash gives Windows users a Unix-like shell, so the same commands shown throughout this course work identically whether you are on macOS, Linux, or Windows with Git Bash.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'After installing, immediately set your name and email (covered in the next lesson) before making your first commit — Git attaches this identity to every commit you make.',
    },
  ],

  quiz: [
    {
      question: 'Which command checks whether Git is installed and which version?',
      options: ['git version', 'git --version', 'git -v install', 'git check'],
      answer: 1,
    },
    {
      question: 'What does Git for Windows include alongside Git itself?',
      options: ['A cloud backup service', 'Git Bash, a Unix-style terminal', 'A built-in code editor', 'A virtual machine'],
      answer: 1,
    },
    {
      question: 'Why is it useful to learn the Git CLI before relying on a GUI?',
      options: [
        'GUIs do not support branching',
        'GUIs are slower than the CLI',
        'GUIs run the same underlying commands, so the CLI is the foundation',
        'The CLI is required for GitHub',
      ],
      answer: 2,
    },
  ],

  previous: 'introduction',
  next: 'git-config',
};
