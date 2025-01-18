import { View, Text } from "react-native";
import React, { useState } from "react";
import { GET_QUESTION_DETAIL } from "@/app/graphql/queries";
import { useQuery } from "@apollo/client";
import Loading from "@/app/components/Loading";
import { Box, Divider, Heading } from "native-base";
import Form from "./Form";
import Result from "../Results/Result";
import { auth } from "../../auth"

export default function DetailsScreen({ route }) {
  const { id } = route.params;
  const [isVoted, setIsVoted] = useState(false);
  const { loading, error, data } = useQuery(GET_QUESTION_DETAIL, {
    variables: { 
      id
    },
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  console.log("DetailsScreen, item", data);
  const { text, options } = data.questions_by_pk;
  return (
    <Box p="3">
      <Heading>{text}</Heading>
      <Divider my={2} />
      {!isVoted ? (
        <Form options={options} setIsVoted={setIsVoted} />
      ) : (
        <Result id={id} />
      )}
    </Box>
  );
}
