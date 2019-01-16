const express = require('express');
const expressGraphQL = require('express-graphql');

// Create an express instance
const app = express();

// Connect with graphql and the graphiql panel
// prettier-ignore
app.use('/graphql', expressGraphQL({
  graphiql: true
}));

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`=== Server running on port ${port} ===`));
