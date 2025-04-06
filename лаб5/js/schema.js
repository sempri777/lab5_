import { GraphQLSchema, GraphQLObjectType, GraphQLInt } from 'graphql';

let foo = 1;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootType',
    fields: {
      foo: {
        type: GraphQLInt,
        resolve: () => foo // Функція resolve обов'язкова
      }
    }
  })
});

export default schema;