import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://improved-sheepdog-48.hasura.app/v1/graphql", // GraphQL endpoint URL'iniz
  cache: new InMemoryCache(), // Apollo için cache yönetimi
});

export default client;