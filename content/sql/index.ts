import { introduction } from './introduction';
import { relationalDatabases } from './relationalDatabases';
import { sqlDataTypes } from './sqlDataTypes';
import { settingUpADatabase } from './settingUpADatabase';
import { selectStatement } from './selectStatement';
import { whereClause } from './whereClause';
import { orderBy } from './orderBy';
import { limitAndOffset } from './limitAndOffset';
import { distinct } from './distinct';
import { comparisonOperators } from './comparisonOperators';
import { logicalOperators } from './logicalOperators';
import { likeAndWildcards } from './likeAndWildcards';
import { inAndBetween } from './inAndBetween';
import { nullHandling } from './nullHandling';
import { aggregateFunctions } from './aggregateFunctions';
import { groupBy } from './groupBy';
import { having } from './having';
import { innerJoin } from './innerJoin';
import { leftAndRightJoin } from './leftAndRightJoin';
import { fullOuterJoin } from './fullOuterJoin';
import { selfJoins } from './selfJoins';
import { union } from './union';
import { insertStatement } from './insertStatement';
import { updateAndDelete } from './updateAndDelete';
import { transactions } from './transactions';
import { createTableAndConstraints } from './createTableAndConstraints';
import { alterTable } from './alterTable';
import { normalization } from './normalization';
import { subqueries } from './subqueries';
import { viewsIndexesAndWindowFunctions } from './viewsIndexesAndWindowFunctions';

export const sqlTutorials = {
  introduction,
  'relational-databases': relationalDatabases,
  'sql-data-types': sqlDataTypes,
  'setting-up-a-database': settingUpADatabase,
  'select-statement': selectStatement,
  'where-clause': whereClause,
  'order-by': orderBy,
  'limit-and-offset': limitAndOffset,
  distinct,
  'comparison-operators': comparisonOperators,
  'logical-operators': logicalOperators,
  'like-and-wildcards': likeAndWildcards,
  'in-and-between': inAndBetween,
  'null-handling': nullHandling,
  'aggregate-functions': aggregateFunctions,
  'group-by': groupBy,
  having,
  'inner-join': innerJoin,
  'left-and-right-join': leftAndRightJoin,
  'full-outer-join': fullOuterJoin,
  'self-joins': selfJoins,
  union,
  'insert-statement': insertStatement,
  'update-and-delete': updateAndDelete,
  transactions,
  'create-table-and-constraints': createTableAndConstraints,
  'alter-table': alterTable,
  normalization,
  subqueries,
  'views-indexes-and-window-functions': viewsIndexesAndWindowFunctions,
};
