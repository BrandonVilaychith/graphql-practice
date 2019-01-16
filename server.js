const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

// Create an express instance
const app = express();

// Connect with graphql and the graphiql panel
// prettier-ignore
app.use('/graphql', expressGraphQL({
  // Gives the GraphQL a schema to work with
  schema,
  // enables GraphiQL tool
  graphiql: true
}));

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`=== Server running on port ${port} ===`));
