import React from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { View, StyleSheet, Text } from "react-native";
import MyComponent from "./src/ReactNativePaper/MyComponent";
import { countryList, townList } from "./constants/constantList";
import { Provider } from "react-native-paper";
import UpdateModal from "./src/UpdateModal";

export default function App() {
  return (
    <View style={styles.inputForSelection}>
      {/* <ModalDropdown options={['option 1', 'option 2']}/> */}
      <MyComponent items={countryList} placeholder="Укажите вашу страну" />
      <MyComponent items={townList} placeholder="Укажите ваш город" />
      <UpdateModal />
    </View>
  );
}

const styles = StyleSheet.create({
  inputForSelection: {
    borderWidth: 2,
    borderRadius: 25,
    padding: Platform.OS === "ios" ? 15 : 2,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "400",
    marginTop: 60,
    height: 100,
  },
});
