import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import DeleteButton from './DeleteButton';
import { Box } from 'native-base';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { auth } from "../../../auth";


type RootStackParamList = {
    Home: undefined;
    Details: { id: number }; // "Details" ekranı bir "id" parametresi alır
  };
  
  // Props türünü tanımlayın
  type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

const Item = ({ item }) => {
    const navigation = useNavigation();
    console.log("ITEM,İTEM", item)
    return (
        <Box style={styles.container}>
            
            <TouchableOpacity
                style={styles.titleBtn}
                onPress={() => navigation.navigate("Details", { id: item.id })}
            >
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>

            {auth.currentUser.uid === item.user_id && (
                <DeleteButton id={item.id} />
            )}
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