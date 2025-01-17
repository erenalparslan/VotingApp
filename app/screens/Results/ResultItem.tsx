import { View, Text } from 'react-native'
import React from 'react'
import { Box, Heading } from 'native-base'

const ResultItem = ({item,total}) => {
  return (
    <Box>
        <Heading size={"sm"} mb={"3"}>{item.text} (%{((item.answers_aggregate.aggregate.count *100) /total).toFixed(1)}) {"-"} {item.answers_aggregate.aggregate.count} total </Heading>

    </Box>
  )
}

export default ResultItem