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
  const openModal = false
  const base64ready = "data:image/png;base64,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"
      const mime = "image/png"
      const data = "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"
      const base64picture = "data:" + mime + ";base64, " + data
      //image.src = 'data:image/png;base64,iVBORw0K...';


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
        <Image style={styles.img} source={{uri: base64ready}}/>
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


