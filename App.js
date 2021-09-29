import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";

import MyComponent from "./src/ReactNativePaper/MyComponent";
import { countryList, townList } from "./constants/constantList";
import UpdateModal from "./src/UpdateModal";
import { TooltipComponent } from "./src/tutorial/TooltipComponent";
import { TutorialStep } from "./src/tutorial/TutorialStep";

const App = (props) => {
  const openModal = false
  const WalkthroughableView = walkthroughable(View)
  
  return (
    <View style={styles.inputForSelection}>
      <Appbar.Header style={styles.bottom}>
        <TutorialStep 
      order = {4}
      insideBlock = {<Appbar.Content title="Тестовое приложение" />}
      />
        <Appbar.Action icon="information-outline" onPress={() => props.start()} />
      </Appbar.Header>
      
      <CopilotStep
        text="Здесь вы можете найти алгоритмы лечения, медицинские калькуляторы и расчёт дозировок."
        order={1}
        name="firstUniqueKey">
        <WalkthroughableView style={styles.title}>
          <MyComponent items={countryList} placeholder="Укажите вашу страну" />
        </WalkthroughableView>
      </CopilotStep>
      <CopilotStep
        text="А тут - регион"
        order={2}
        name="secondUniqueKey">
        <WalkthroughableView style={styles.title}>
          <MyComponent items={townList} placeholder="Укажите ваш город" />
        </WalkthroughableView>
      </CopilotStep>
      <CopilotStep
        text="Милая картинка пиксельного котика"
        order={3}
        name="thirdUniqueKey">
        <WalkthroughableView style={styles.img}
        >
          <Image
        style={styles.img}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb93UIrxAcBXkr9QX3GDUnGrtJUsR4KkXIDfOgbUmzfKLbe_j9mtcHU5Vors6XE5o9jYg&usqp=CAU" }}/>
        </WalkthroughableView>
      </CopilotStep>
      {openModal ? <UpdateModal /> : openModal == false}
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

 
