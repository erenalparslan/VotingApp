import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const AddButton = () => {
  return (
    <TouchableOpacity>
   <Ionicons name="add" size={30} marginRight={10} color={'green'}></Ionicons>
    </TouchableOpacity>
  )
}

export default AddButton