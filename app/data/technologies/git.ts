export const git = {
  slug: 'git',

  title: 'Git',

  description:
    'Learn Git from beginner to advanced with step-by-step tutorials covering commits, branching, merging, rebasing, and real collaboration workflows.',

  level: 'Beginner to Advanced',

  duration: '6+ Hours',

  tutorials: [
    {
      level: 'Beginner',
      items: [
        {
          title: 'Introduction',
          slug: 'introduction',
          duration: '8 min',
          description: 'What Git is and why version control matters.',
        },
        {
          title: 'Installation & Setup',
          slug: 'installation-and-setup',
          duration: '8 min',
          description: 'Install Git on your operating system.',
        },
        {
          title: 'Git Configuration',
          slug: 'git-config',
          duration: '8 min',
          description: 'Set your identity with git config.',
        },
        {
          title: 'Creating a Repository',
          slug: 'creating-a-repository',
          duration: '8 min',
          description: 'Turn a folder into a Git repository with git init.',
        },
        {
          title: 'The Git Workflow',
          slug: 'git-workflow',
          duration: '10 min',
          description: 'Working directory, staging area, and repository.',
        },
        {
          title: 'Staging Changes',
          slug: 'git-add',
          duration: '8 min',
          description: 'Move changes into the staging area with git add.',
        },
        {
          title: 'Committing Changes',
          slug: 'git-commit',
          duration: '10 min',
          description: 'Record staged changes with git commit.',
        },
        {
          title: 'git status & git diff',
          slug: 'git-status-and-diff',
          duration: '10 min',
          description: 'Inspect changes before staging or committing.',
        },
        {
          title: '.gitignore',
          slug: 'gitignore',
          duration: '8 min',
          description: 'Tell Git which files to never track.',
        },
      ],
    },
    {
      level: 'Intermediate',
      items: [
        {
          title: 'Viewing History',
          slug: 'git-log',
          duration: '10 min',
          description: 'Explore commit history with git log.',
        },
        {
          title: 'Branches',
          slug: 'branches',
          duration: '12 min',
          description: 'Create and switch branches to isolate work.',
        },
        {
          title: 'Merging Branches',
          slug: 'git-merge',
          duration: '12 min',
          description: 'Combine changes from one branch into another.',
        },
        {
          title: 'Resolving Merge Conflicts',
          slug: 'merge-conflicts',
          duration: '14 min',
          description: 'Resolve conflicting changes by hand.',
        },
        {
          title: 'Remote Repositories',
          slug: 'remote-repositories',
          duration: '10 min',
          description: 'Connect your local repository to a remote.',
        },
        {
          title: 'Cloning a Repository',
          slug: 'git-clone',
          duration: '8 min',
          description: 'Get a full local copy with git clone.',
        },
        {
          title: 'git push & git pull',
          slug: 'git-push-and-pull',
          duration: '10 min',
          description: 'Sync local commits with a remote.',
        },
        {
          title: 'git fetch',
          slug: 'git-fetch',
          duration: '8 min',
          description: 'Download remote changes without merging.',
        },
        {
          title: 'Pull Requests & Forking',
          slug: 'pull-requests-and-forking',
          duration: '12 min',
          description: 'Contribute to shared and open-source projects.',
        },
      ],
    },
    {
      level: 'Advanced',
      items: [
        {
          title: 'git stash',
          slug: 'git-stash',
          duration: '10 min',
          description: 'Temporarily shelve uncommitted changes.',
        },
        {
          title: 'Undoing Changes',
          slug: 'undoing-changes',
          duration: '12 min',
          description: 'Discard unwanted edits with git restore.',
        },
        {
          title: 'git reset vs git revert',
          slug: 'git-reset-and-revert',
          duration: '14 min',
          description: 'Two different ways to undo commits.',
        },
        {
          title: 'Amending Commits',
          slug: 'amending-commits',
          duration: '8 min',
          description: 'Fix the most recent commit in place.',
        },
        {
          title: 'Rebasing',
          slug: 'git-rebase',
          duration: '14 min',
          description: 'Replay commits for a cleaner, linear history.',
        },
        {
          title: 'Rebase vs Merge',
          slug: 'rebase-vs-merge',
          duration: '10 min',
          description: 'Compare the two branch-combining strategies.',
        },
        {
          title: 'Cherry Picking',
          slug: 'cherry-picking',
          duration: '10 min',
          description: 'Apply a single commit from another branch.',
        },
        {
          title: 'Git Tags',
          slug: 'git-tags',
          duration: '8 min',
          description: 'Mark release points with lightweight and annotated tags.',
        },
        {
          title: 'Git Hooks',
          slug: 'git-hooks',
          duration: '10 min',
          description: 'Run scripts automatically at key Git events.',
        },
        {
          title: 'Best Practices',
          slug: 'best-practices',
          duration: '10 min',
          description: 'Commit conventions and branching strategy.',
        },
      ],
    },
  ],
};
