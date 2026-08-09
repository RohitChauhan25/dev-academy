import type { InterviewQuestionTopic } from '@/content/javascript/interview-questions';

export const gitInterviewQuestions: InterviewQuestionTopic[] = [
  {
    slug: 'introduction',
    title: 'Git Introduction',
    questions: [
      {
        question: 'What is the difference between Git and GitHub?',
        answer:
          'Git is the version control tool that runs locally. GitHub is a hosting service for Git repositories that adds a web UI, pull requests, and collaboration features on top of Git.',
        difficulty: 'beginner',
      },
      {
        question: 'What does it mean that Git is a "distributed" version control system?',
        answer:
          'Every developer has a full copy of the entire project history on their own machine, not just the latest snapshot. Commits happen locally and instantly; a network connection is only needed to sync with others.',
        difficulty: 'beginner',
      },
      {
        question: 'What problem does version control solve that manually copying folders does not?',
        answer:
          'It gives you a searchable, complete history of every change with who made it and why, plus the ability to safely branch, merge, and undo — instead of guessing which "final_v2" folder is actually current.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'git-config',
    title: 'Git Configuration',
    questions: [
      {
        question: 'What is the difference between --global and --local when running git config?',
        answer:
          '--global applies the setting to every repository for the current user; --local (the default when no flag is given) applies it only to the current repository, and takes priority over global if both are set.',
        difficulty: 'beginner',
      },
      {
        question: 'Why does Git need your name and email configured before your first commit?',
        answer:
          'Every commit permanently records an author name and email as part of its metadata, so Git needs that identity set up in advance.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'git-workflow',
    title: 'The Git Workflow',
    questions: [
      {
        question: 'What are the three areas a change moves through in Git?',
        answer:
          'The working directory (files you edit), the staging area/index (changes marked for the next commit), and the repository (permanently committed snapshots).',
        difficulty: 'beginner',
      },
      {
        question: 'Why does Git have a separate staging area instead of committing the whole working directory at once?',
        answer:
          'The staging area lets you build commits deliberately — you can stage only some of the files you changed, keeping unrelated edits out of a given commit.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'git-add',
    title: 'Staging Changes',
    questions: [
      {
        question: 'If you git add a file and then edit it again, what does the next commit contain?',
        answer:
          'The version that was staged at the time of git add, not your latest edits — you need to run git add again to include the newer changes.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is the difference between git add . and git add -A?',
        answer:
          'git add . stages changes in the current directory and below. git add -A stages every change in the whole repository, including deletions, regardless of your current directory.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'git-commit',
    title: 'Committing Changes',
    questions: [
      {
        question: 'What uniquely identifies a Git commit?',
        answer:
          'A SHA-1 hash computed from its content, author, timestamp, and parent commit — which is why two commits with identical content made at different times still get different hashes.',
        difficulty: 'beginner',
      },
      {
        question: 'What makes a good first line for a commit message?',
        answer:
          'A short, imperative summary of the change (e.g. "Fix null pointer on empty cart"), ideally under ~50 characters, explaining why the change was made rather than restating the diff.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'gitignore',
    title: '.gitignore',
    questions: [
      {
        question: 'If a file is already tracked by Git, does adding it to .gitignore stop Git from tracking it?',
        answer:
          'No. .gitignore only affects untracked files. To stop tracking an already-committed file, you must run git rm --cached <file> first, then the ignore rule takes effect.',
        difficulty: 'intermediate',
      },
      {
        question: 'What kinds of files typically belong in .gitignore?',
        answer:
          'Generated build output, dependency folders like node_modules, editor/OS-specific files, and anything containing secrets, like .env files.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'branches',
    title: 'Branches',
    questions: [
      {
        question: 'What is a Git branch, technically?',
        answer:
          'A branch is a movable pointer to a commit. Creating one is instant and cheap because it does not copy any files — it just adds another pointer.',
        difficulty: 'beginner',
      },
      {
        question: 'What happens if you run git branch -d on a branch that has unmerged commits?',
        answer:
          'Git refuses to delete it, to prevent losing work. You would need git branch -D to force-delete it, discarding the unmerged commits.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'git-merge',
    title: 'Merging Branches',
    questions: [
      {
        question: 'What is the difference between a fast-forward merge and a three-way merge?',
        answer:
          'A fast-forward merge happens when the target branch has no new commits since the source branch diverged — the pointer just moves forward. A three-way merge happens when both branches have new commits, and Git creates a new merge commit with two parents to join them.',
        difficulty: 'intermediate',
      },
      {
        question: 'Does merging a branch delete it?',
        answer: 'No. The branch and its pointer still exist after merging; it is common to delete it manually afterward once its work is safely in the target branch.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'merge-conflicts',
    title: 'Resolving Merge Conflicts',
    questions: [
      {
        question: 'Why do merge conflicts happen?',
        answer:
          'Git cannot automatically decide how to combine two changes, most commonly when both branches edited the same lines of the same file differently.',
        difficulty: 'beginner',
      },
      {
        question: 'How do you resolve a merge conflict?',
        answer:
          'Open each conflicted file, decide on the final content, remove the <<<<<<<, =======, and >>>>>>> conflict markers, then git add the resolved file and run git commit to finish the merge.',
        difficulty: 'intermediate',
      },
      {
        question: 'How can you cancel a merge that has hit a conflict you don\'t want to resolve right now?',
        answer:
          'git merge --abort cancels the merge entirely and returns the branch to the state it was in before the merge started.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'remote-repositories',
    title: 'Remote Repositories',
    questions: [
      {
        question: 'Does Git automatically sync with a remote repository?',
        answer:
          'No — syncing only happens when you explicitly run git push or git pull (or git fetch). Nothing syncs in the background automatically.',
        difficulty: 'beginner',
      },
      {
        question: 'Is "origin" a special, reserved name in Git?',
        answer:
          'No, it is just a convention — the default name Git gives the remote you cloned from. It can be renamed, and repositories can have multiple remotes with different names.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'git-push-and-pull',
    title: 'git push & git pull',
    questions: [
      {
        question: 'What two operations does git pull combine?',
        answer: 'git fetch (download commits from the remote) followed by git merge (integrate them into your current branch).',
        difficulty: 'beginner',
      },
      {
        question: 'Why might a git push be rejected?',
        answer:
          'If the remote has commits you don\'t have locally, Git rejects the push to avoid silently overwriting someone else\'s work — you need to pull and integrate those commits first.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'git-fetch',
    title: 'git fetch',
    questions: [
      {
        question: 'How does git fetch differ from git pull?',
        answer:
          'git fetch only downloads new commits and updates remote-tracking references like origin/main — it never touches your working directory or current branch. git pull does the same download and then automatically merges the changes in.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why would you use git fetch instead of git pull?',
        answer:
          'To review what changed on the remote (e.g. with git log main..origin/main) before deciding how to integrate it, rather than letting it merge automatically.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'pull-requests-and-forking',
    title: 'Pull Requests & Forking',
    questions: [
      {
        question: 'What is the difference between a fork and a branch?',
        answer:
          'A fork is your own copy of an entire repository under your own account (a hosting-platform concept). A branch is a pointer within a single repository. Forking is typically used when you lack write access to the original repository.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is the conventional name for the remote pointing back to the original repository you forked?',
        answer: '"upstream" — you fetch from it to keep your fork in sync with the original project.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'git-stash',
    title: 'git stash',
    questions: [
      {
        question: 'What is the difference between git stash pop and git stash apply?',
        answer:
          'Both reapply a stash\'s changes to the working directory. pop also removes that stash from the stash list afterward; apply keeps it in the list so it can be applied again elsewhere.',
        difficulty: 'intermediate',
      },
      {
        question: 'Are stashes shared with a remote repository?',
        answer: 'No, stashes are local-only and are never pushed or pulled.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'undoing-changes',
    title: 'Undoing Changes',
    questions: [
      {
        question: 'What is the difference between git restore <file> and git restore --staged <file>?',
        answer:
          'git restore <file> discards uncommitted edits, reverting the file to its last committed state. git restore --staged <file> only unstages the file, keeping the edits in the working directory.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does git clean -n do, and why use it before git clean -f?',
        answer:
          'It previews which untracked files would be deleted, without deleting anything, so you can confirm before running git clean -f, which permanently removes them.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'git-reset-and-revert',
    title: 'git reset vs git revert',
    questions: [
      {
        question: 'What is the difference between git reset --soft, --mixed, and --hard?',
        answer:
          '--soft moves the branch pointer back but keeps changes staged. --mixed (the default) moves it back and unstages the changes, keeping them in the working directory. --hard moves it back and discards the changes entirely.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is git revert generally preferred over git reset for shared, pushed commits?',
        answer:
          'git revert creates a new commit that undoes a previous one, keeping history intact and forward-moving. git reset rewrites history by moving the branch pointer, which diverges from what others have already pulled.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'amending-commits',
    title: 'Amending Commits',
    questions: [
      {
        question: 'Does git commit --amend edit the existing commit in place?',
        answer:
          'No — it creates an entirely new commit with a new hash and moves the branch pointer to it. The old commit becomes unreferenced, so it functions like an edit but is technically a replacement.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is it risky to amend a commit that has already been pushed?',
        answer:
          'Because amending changes the commit hash, anyone who already pulled the original commit will have a diverged history, requiring a force-push and potential confusion or conflicts for collaborators.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'git-rebase',
    title: 'Rebasing',
    questions: [
      {
        question: 'What does git rebase do differently from git merge?',
        answer:
          'Rebase replays your branch\'s commits on top of another branch, giving them new hashes and producing linear history with no merge commit. Merge preserves existing commits exactly and adds a new merge commit joining the histories.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is interactive rebase used for?',
        answer:
          'Editing, reordering, squashing, or dropping commits before they land — commonly used to clean up messy local commits into a smaller, well-described set before opening a pull request.',
        difficulty: 'advanced',
      },
      {
        question: 'What is the "golden rule" of rebasing?',
        answer: 'Never rebase commits that have already been pushed and might have been pulled by someone else, since it rewrites their hashes and diverges shared history.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'rebase-vs-merge',
    title: 'Rebase vs Merge',
    questions: [
      {
        question: 'When is it safe to rebase, and when should you merge instead?',
        answer:
          'Rebasing is safe for your own local, unpushed commits — for example, keeping a feature branch current with main. Once commits are pushed and potentially shared, prefer merge, since it never rewrites history.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'cherry-picking',
    title: 'Cherry Picking',
    questions: [
      {
        question: 'What does git cherry-pick do?',
        answer:
          'It copies a single specific commit from anywhere in the repository and applies it as a new commit on the current branch, without merging the rest of the branch it came from.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is a typical real-world use case for cherry-picking?',
        answer:
          'Shipping a critical hotfix that was committed on a branch that also contains unrelated, unfinished work — cherry-pick just the fix commit onto main instead of merging everything.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'git-tags',
    title: 'Git Tags',
    questions: [
      {
        question: 'How does a tag differ from a branch?',
        answer:
          'A tag is a fixed pointer to a specific commit that never moves. A branch is a pointer that automatically moves forward as new commits are added.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the difference between a lightweight and an annotated tag?',
        answer:
          'A lightweight tag is just a name pointing to a commit. An annotated tag is a full Git object that also stores a message, tagger name/email, and date — recommended for real releases.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'git-hooks',
    title: 'Git Hooks',
    questions: [
      {
        question: 'What happens if a pre-commit hook script exits with a non-zero status?',
        answer: 'Git aborts the commit entirely, forcing whatever the hook checks for (like linting) to be fixed first.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why are raw .git/hooks scripts not automatically shared with collaborators?',
        answer:
          'The .git folder is never committed, so hooks placed directly there are local-only. Teams that want shared hooks typically use a tool like Husky, which installs them via a package.json script.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'best-practices',
    title: 'Git Best Practices',
    questions: [
      {
        question: 'If a secret like an API key is accidentally committed, is deleting it in a later commit enough?',
        answer:
          'No — the secret is still visible in the repository\'s history. It must be treated as compromised and rotated, and ideally purged from history with a tool like git filter-repo.',
        difficulty: 'advanced',
      },
      {
        question: 'What does branch protection on main typically enforce?',
        answer:
          'That changes go through a pull request with passing checks and required reviews, preventing accidental direct pushes or force-pushes to the branch everyone depends on.',
        difficulty: 'intermediate',
      },
    ],
  },
];
