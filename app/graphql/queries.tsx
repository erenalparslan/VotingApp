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
  mutation AddNewQuestionMutation(
    $title: String!
    $options: [options_insert_input!]!
  ) {
    insert_questions_one(
      object: { text: $title, options: { data: $options } }
    ) {
      id
      text
    }
  }
`;

export const GET_QUESTION_DETAIL = gql`
  query DetailQuery($id: Int!, $user_id: String!) {
    questions_by_pk(id: $id) {
      id
      text
      options {
        id
        text
      }
      answers(where: { user_id: { _eq: $user_id } }, limit: 1) {
        id
        user_id
      }
    }
  }
`;
export const NEW_ANSWER_MUTATION = gql`
  mutation NewAnswer($option_id: Int!, $user_id: String!, $question_id: Int!) {
    insert_answers_one(
      object: {
        option_id: $option_id
        user_id: $user_id
        question_id: $question_id
      }
    ) {
      id
    }
  }
`;

export const RESULTS_SUBSCRIPTION = gql`
  subscription MySubscription($id: Int!) {
    questions_by_pk(id: $id) {
      options {
        id
        text
        answers_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`;
