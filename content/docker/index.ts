import { introduction } from './introduction';
import { installation } from './installation';
import { dockerArchitecture } from './dockerArchitecture';
import { imagesVsContainers } from './imagesVsContainers';
import { dockerfileBasics } from './dockerfileBasics';
import { dockerBuild } from './dockerBuild';
import { dockerRun } from './dockerRun';
import { containerLifecycle } from './containerLifecycle';
import { dockerPsAndLogs } from './dockerPsAndLogs';
import { environmentVariables } from './environmentVariables';
import { dockerExec } from './dockerExec';
import { portMapping } from './portMapping';
import { volumesAndBindMounts } from './volumesAndBindMounts';
import { dockerNetworking } from './dockerNetworking';
import { dockerignore } from './dockerignore';
import { dockerHub } from './dockerHub';
import { taggingAndPushingImages } from './taggingAndPushingImages';
import { multiStageBuilds } from './multiStageBuilds';
import { imageLayersAndCaching } from './imageLayersAndCaching';
import { dockerComposeIntroduction } from './dockerComposeIntroduction';
import { dockerComposeYml } from './dockerComposeYml';
import { multiContainerApps } from './multiContainerApps';
import { dockerInCicd } from './dockerInCicd';
import { bestPractices } from './bestPractices';

export const dockerTutorials = {
  introduction,
  installation,
  'docker-architecture': dockerArchitecture,
  'images-vs-containers': imagesVsContainers,
  'dockerfile-basics': dockerfileBasics,
  'docker-build': dockerBuild,
  'docker-run': dockerRun,
  'container-lifecycle': containerLifecycle,
  'docker-ps-and-logs': dockerPsAndLogs,
  'environment-variables': environmentVariables,
  'docker-exec': dockerExec,
  'port-mapping': portMapping,
  'volumes-and-bind-mounts': volumesAndBindMounts,
  'docker-networking': dockerNetworking,
  dockerignore,
  'docker-hub': dockerHub,
  'tagging-and-pushing-images': taggingAndPushingImages,
  'multi-stage-builds': multiStageBuilds,
  'image-layers-and-caching': imageLayersAndCaching,
  'docker-compose-introduction': dockerComposeIntroduction,
  'docker-compose-yml': dockerComposeYml,
  'multi-container-apps': multiContainerApps,
  'docker-in-cicd': dockerInCicd,
  'best-practices': bestPractices,
};
