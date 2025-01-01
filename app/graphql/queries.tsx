// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_QUESTİONS = gql`
subscription MyQuery {
    questions {
      id
      text
      created_at
      options {
        text
      }
    }
  }
  
`;
