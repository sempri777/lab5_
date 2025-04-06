import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema.js'; // Правильний імпорт

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4002, () => {
  console.log('GraphQL server is listening on http://localhost:4002/graphql');
});