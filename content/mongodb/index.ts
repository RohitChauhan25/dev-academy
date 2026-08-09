import { introduction } from './introduction';
import { installationAndSetup } from './installationAndSetup';
import { mongodbShellAndCompass } from './mongodbShellAndCompass';
import { databasesAndCollections } from './databasesAndCollections';
import { documentsAndBson } from './documentsAndBson';
import { insertingDocuments } from './insertingDocuments';
import { findingDocuments } from './findingDocuments';
import { queryOperators } from './queryOperators';
import { updatingDocuments } from './updatingDocuments';
import { deletingDocuments } from './deletingDocuments';
import { projection } from './projection';
import { sortingAndLimiting } from './sortingAndLimiting';
import { indexes } from './indexes';
import { schemaDesign } from './schemaDesign';
import { embeddingVsReferencing } from './embeddingVsReferencing';
import { dataTypes } from './dataTypes';
import { aggregationPipeline } from './aggregationPipeline';
import { commonAggregationStages } from './commonAggregationStages';
import { oneToManyRelationships } from './oneToManyRelationships';
import { manyToManyRelationships } from './manyToManyRelationships';
import { transactions } from './transactions';
import { replication } from './replication';
import { sharding } from './sharding';
import { mongooseOdmBasics } from './mongooseOdmBasics';
import { schemaValidation } from './schemaValidation';
import { bestPractices } from './bestPractices';

export const mongodbTutorials = {
  introduction,
  'installation-and-setup': installationAndSetup,
  'mongodb-shell-and-compass': mongodbShellAndCompass,
  'databases-and-collections': databasesAndCollections,
  'documents-and-bson': documentsAndBson,
  'inserting-documents': insertingDocuments,
  'finding-documents': findingDocuments,
  'query-operators': queryOperators,
  'updating-documents': updatingDocuments,
  'deleting-documents': deletingDocuments,
  projection,
  'sorting-and-limiting': sortingAndLimiting,
  indexes,
  'schema-design': schemaDesign,
  'embedding-vs-referencing': embeddingVsReferencing,
  'data-types': dataTypes,
  'aggregation-pipeline': aggregationPipeline,
  'common-aggregation-stages': commonAggregationStages,
  'one-to-many-relationships': oneToManyRelationships,
  'many-to-many-relationships': manyToManyRelationships,
  transactions,
  replication,
  sharding,
  'mongoose-odm-basics': mongooseOdmBasics,
  'schema-validation': schemaValidation,
  'best-practices': bestPractices,
};
