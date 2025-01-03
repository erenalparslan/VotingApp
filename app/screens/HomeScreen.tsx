import Questions from "./Questions/";
import AddButton from "../components/AddButton";
import AddNewModal from "../screens/Questions/AddNewModal";
import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton
          icon_name={"add"}
          onPress={() => setModalVisible((prev) => !prev)}
        
        />
      ),
      headerLeft: () => (
        <AddButton
          icon_name={"person"}
          onPress={() => navigation.navigate("Profile")}
        />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Questions />
      <Modal
        animationType="slide"
        presentationStyle={"pageSheet"}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <AddNewModal
          closeModal={() => {
            setModalVisible(false);
          }}
        />
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({});
