import { View, Text } from 'react-native'
import React from 'react'
import Item from './Item'

export default function List({data}) {
  return (
    <View>
        {data.map((item, id) => <Item key={id} item={item} />)}
   
    </View>
  )
}


