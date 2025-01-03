// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_QUESTIONS = gql`
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

export const APP_NEW_QUESTION_MUTATION = gql`
mutation AddNewQuestionMutation($title: String!, $options: [options_insert_input!]!) {
  insert_questions_one(object: {text: $title, options: {data: $options}}) {
    id
    text
  }
}
`

export const GET_QUESTION_DETAIL = gql`
query DetailQuery($id: Int!) {
  questions_by_pk(id: $id) {
    id
    text
    options {
      id
      text
    }
  }
}
`