
import React from 'react'
import { IconButton, Spinner } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';
import { DELETE_QUESTION_MUTATION } from '@/app/graphql/queries';
import { useMutation } from '@apollo/client';



const DeleteButton = ({ id, }) => {
    const [deleteQuestion, { loading, error }] = useMutation(DELETE_QUESTION_MUTATION, {
        variables: {
            id
        }
    })

    const handleDelete = async () => {
        await deleteQuestion()
    }

    if (loading) {
        return <Spinner color="indigo.500" size={"lg"} mr={5} />
    }

    return (

        <IconButton
            onPress={handleDelete}
            colorScheme="red"
            disabled={loading}
            _icon={{
                as: Ionicons,
                name: "trash-outline"
            }}
        />

    )
}

export default DeleteButton