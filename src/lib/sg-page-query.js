import combineQuery from 'graphql-combine-query';
// import global queries here.

export default function sgPageQuery(query) {
  // Add multiple global queries to the node data query.
  return combineQuery('PageQuery').add(query);
}

