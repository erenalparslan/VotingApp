import { View, Text} from 'react-native'
import React from 'react'
import { Box, Image } from 'native-base'
import emptyList from './emptylist.webp'


const EmptyList = ({message}) => {
  return (
    <Box width="100%" h="100%" justifyContent={"center"} alignItems={"center"} >
    <Image source={emptyList} alt='empty image'  h="300" resizeMode="contain" mb="4"/>
    
      <Text>{message}</Text>
    </Box>
  )
}

export default EmptyList