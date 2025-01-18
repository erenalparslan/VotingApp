import { StyleSheet, Text, View } from "react-native";

import { Box, Button, Radio } from "native-base";
import { useMutation } from "@apollo/client";
import { NEW_ANSWER_MUTATION } from "@/app/graphql/queries";
import React, { useState } from "react";
import { auth } from "../../auth";


const Form = ({ options ,setIsVoted}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [newAnswer, { loading, data }] = useMutation(NEW_ANSWER_MUTATION);
  const handleSubmit = async () => {
    if (!selectedOption) {
      return;
    }
    await newAnswer({
      variables: {
        option_id: selectedOption,
        user_id : auth.currentUser?.uid,
      },
    });
    setIsVoted(true);
  };

  return (
    <Box py={"3"}>
      <Radio.Group value={selectedOption} onChange={setSelectedOption}>
        {options.map((options) => (
          <Radio my={1} key={options.id} value={options.id}>
            {options.text}
          </Radio>
        ))}
      </Radio.Group>
      <Button mt={5} onPress={handleSubmit} isLoading={loading}>Submit</Button>
    </Box>
  );
};

export default Form;

const styles = StyleSheet.create({});
