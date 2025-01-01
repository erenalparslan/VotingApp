import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

// HTTP bağlantısı (Query ve Mutation'lar için)
const httpLink = new HttpLink({
  uri: "https://improved-sheepdog-48.hasura.app/v1/graphql", // GraphQL HTTP endpoint
});

// WebSocket bağlantısı (Subscription'lar için)
const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://improved-sheepdog-48.hasura.app/v1/graphql", // GraphQL WebSocket endpoint
    connectionParams: {
      headers: {
        // Buraya gerekirse Authorization token gibi başlıklar ekleyebilirsiniz
        Authorization: `Bearer YOUR_TOKEN`,
      },
    },
  })
);

// İstek türüne göre (Query/Mutation veya Subscription) uygun bağlantıyı seç
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink, // Subscription'lar için WebSocket bağlantısı
  httpLink // Query ve Mutation'lar için HTTP bağlantısı
);

// ApolloClient oluştur
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
