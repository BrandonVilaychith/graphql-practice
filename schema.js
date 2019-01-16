const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = graphql; // Destructuring objects from graphql
const fetch = require('node-fetch');

// PostType
const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'This is my post type',
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  }
});

// Root query for the schema
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    posts: {
      type: new GraphQLList(PostType),
      args: {},
      async resolve(parentValue, args) {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
        return posts.json();
      }
    }
  }
});

// Export root query
module.exports = new GraphQLSchema({ query: RootQuery });
