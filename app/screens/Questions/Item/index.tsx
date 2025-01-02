import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import DeleteButton from './DeleteButton';
import { Box } from 'native-base';


const Item = ({ item }) => {
    const navigation = useNavigation();
    console.log("ITEM,İTEM", item)
    return (
        <Box style={styles.container}>
            
            <TouchableOpacity
                style={styles.titleBtn}
                onPress={() => navigation.navigate("Detail", { id: item.id })}
            >
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
        </Box>

    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleBtn: {
        flex: 1,
        padding: 10
    },
    text: {
        fontSize: 20,
        color: 'black'
    }

})