const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = graphql; // Destructuring objects from graphql

// Root query for the schema
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // this will be filled in a bit
  }
});

// Export root query
module.exports = new GraphQLSchema({ query: RootQuery });
