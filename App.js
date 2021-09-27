import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import { Appbar } from 'react-native-paper';
import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";
import PropTypes from "prop-types";

import MyComponent from "./src/ReactNativePaper/MyComponent";
import { countryList, townList } from "./constants/constantList";
import UpdateModal from "./src/UpdateModal";
import { Switch } from "react-native";

const App = (props) => {
  const openModal = false
  const [nextStepActive, setNextStepActive] = useState(true)
  const WalkthroughableView = walkthroughable(View)
  const WalkthroughableImage = walkthroughable(Image)
  

  useEffect(() => {
    props.copilotEvents.on("stepChange", handleStepChange)
    props.start()
  }, [])
  const handleStepChange = (step) => {
    console.log(`Current step is: ${step.name}`)
  }
  return (
    <View style={styles.inputForSelection}>
      <Appbar.Header style={styles.bottom}>
        <Appbar.Content title="Тестовое приложение" />
        <Appbar.Action icon="information-outline" onPress={() => props.start()} />
      </Appbar.Header>
      <CopilotStep
        text="This is the heading with some style"
        order={1}
        name="firstUniqueKey">
        <WalkthroughableView style={styles.title}>
          <MyComponent items={countryList} placeholder="Укажите вашу страну" />
        </WalkthroughableView>
      </CopilotStep>
      <CopilotStep
        active={nextStepActive}
        text="This is the heading with some style"
        order={2}
        name="secondUniqueKey">
        <WalkthroughableView style={styles.title}>
          <MyComponent items={townList} placeholder="Укажите ваш город" />
        </WalkthroughableView>
      </CopilotStep>
      <Switch
        onValueChange={(nextStepActive) => setNextStepActive(nextStepActive)}
        value={nextStepActive} />
      <CopilotStep
        active={nextStepActive}
        text="This is the heading with some image"
        order={3}
        name="thirdUniqueKey">
        <WalkthroughableImage
        style={styles.img}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb93UIrxAcBXkr9QX3GDUnGrtJUsR4KkXIDfOgbUmzfKLbe_j9mtcHU5Vors6XE5o9jYg&usqp=CAU" }}
        />
      </CopilotStep>
      


      {openModal ? <UpdateModal /> : openModal == false}
    </View>
  );
}
export default copilot({
  overlay: "svg", // or 'view'
  animated: true // or false
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
