import React, {useState} from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Appbar, Button } from 'react-native-paper';
import { copilot} from "react-native-copilot";

import MyComponent from "./src/ReactNativePaper/MyComponent";
import { countryList, townList } from "./constants/constantList";
import UpdateModal from "./src/modals/UpdateModal";
import RateAppModal2 from "./src/modals/RateAppModal2";
import { TooltipComponent } from "./src/tutorial/TooltipComponent";
import { TutorialStep } from "./src/tutorial/TutorialStep";

const App = (props) => {
  const openModal = true

  return (
    <View style={styles.inputForSelection}>

      <Appbar.Header style={styles.bottom}>
        <TutorialStep
          order={4}
          insideBlock={<Appbar.Content title="Тестовое приложение" />}/>
        <Appbar.Action icon="information-outline" onPress={() => props.start()} />
      </Appbar.Header>

      <TutorialStep 
      order = {1}
      insideBlock = {<MyComponent items={countryList} placeholder="Укажите вашу страну" />}/>
      <TutorialStep 
      order = {2}
      insideBlock = {<MyComponent items={townList} placeholder="Укажите ваш город" />}/>
      <TutorialStep 
      order = {3}
      style={styles.img}
      insideBlock = {
        <Image
        style={styles.img}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb93UIrxAcBXkr9QX3GDUnGrtJUsR4KkXIDfOgbUmzfKLbe_j9mtcHU5Vors6XE5o9jYg&usqp=CAU" }} />
      }/>
      {openModal ? <RateAppModal2 /> : openModal == false}
    </View>
  );
}
export default copilot({
  overlay: "svg", // or 'view'
  animated: true, // or false
  tooltipComponent: TooltipComponent,
})(App);

const styles = StyleSheet.create({
  inputForSelection: {
    height: Dimensions.get('screen').height,
    fontSize: 18,
    fontWeight: "400",
  },
  img: {
    height: 120,
    width: 100,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    width: Dimensions.get("window").width - 20,
    height: 50,
  }
});


