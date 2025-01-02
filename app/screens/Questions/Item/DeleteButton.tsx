
import React from 'react'
import { IconButton, Spinner } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';


const DeleteButton = ({ id, }) => {

    return (

        <IconButton
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