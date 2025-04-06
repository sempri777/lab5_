import { buildSchema } from 'graphql';
import express from 'express';
import { graphqlHTTP } from 'express-graphql'; // Исправленный импорт

let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

let root = {
  hello: () => 'Hello 3!'
};

let app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // Веб-інтерфейс
}));

app.listen(4003);
console.log('http://localhost:4003/graphql');
