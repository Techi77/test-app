import React from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { View, StyleSheet, Text } from "react-native";
import MyComponent from "./src/ReactNativePaper/MyComponent";
import { countryList, townList } from "./src/constantList";
import { Provider } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.inputForSelection}>
      {/* <ModalDropdown options={['option 1', 'option 2']}/> */}
      <MyComponent items={countryList} placeholder="Укажите вашу страну" />
      <MyComponent items={townList} placeholder="Укажите ваш город" />
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
