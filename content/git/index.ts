import { introduction } from './introduction';
import { installationAndSetup } from './installationAndSetup';
import { gitConfig } from './gitConfig';
import { creatingARepository } from './creatingARepository';
import { gitWorkflow } from './gitWorkflow';
import { gitAdd } from './gitAdd';
import { gitCommit } from './gitCommit';
import { gitStatusAndDiff } from './gitStatusAndDiff';
import { gitignore } from './gitignore';
import { gitLog } from './gitLog';
import { branches } from './branches';
import { gitMerge } from './gitMerge';
import { mergeConflicts } from './mergeConflicts';
import { remoteRepositories } from './remoteRepositories';
import { gitClone } from './gitClone';
import { gitPushAndPull } from './gitPushAndPull';
import { gitFetch } from './gitFetch';
import { pullRequestsAndForking } from './pullRequestsAndForking';
import { gitStash } from './gitStash';
import { undoingChanges } from './undoingChanges';
import { gitResetAndRevert } from './gitResetAndRevert';
import { amendingCommits } from './amendingCommits';
import { gitRebase } from './gitRebase';
import { rebaseVsMerge } from './rebaseVsMerge';
import { cherryPicking } from './cherryPicking';
import { gitTags } from './gitTags';
import { gitHooks } from './gitHooks';
import { bestPractices } from './bestPractices';

export const gitTutorials = {
  introduction,
  'installation-and-setup': installationAndSetup,
  'git-config': gitConfig,
  'creating-a-repository': creatingARepository,
  'git-workflow': gitWorkflow,
  'git-add': gitAdd,
  'git-commit': gitCommit,
  'git-status-and-diff': gitStatusAndDiff,
  gitignore,
  'git-log': gitLog,
  branches,
  'git-merge': gitMerge,
  'merge-conflicts': mergeConflicts,
  'remote-repositories': remoteRepositories,
  'git-clone': gitClone,
  'git-push-and-pull': gitPushAndPull,
  'git-fetch': gitFetch,
  'pull-requests-and-forking': pullRequestsAndForking,
  'git-stash': gitStash,
  'undoing-changes': undoingChanges,
  'git-reset-and-revert': gitResetAndRevert,
  'amending-commits': amendingCommits,
  'git-rebase': gitRebase,
  'rebase-vs-merge': rebaseVsMerge,
  'cherry-picking': cherryPicking,
  'git-tags': gitTags,
  'git-hooks': gitHooks,
  'best-practices': bestPractices,
};
