// modules
import { red } from "@material-ui/core/colors";
import React from "react";
import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { Overlay } from "react-native-elements";// вместо import Modal from 'react-native-modal';
import {
  Portal,
  Provider,
  TouchableRipple, //что-то вроде TouchableOpacity, только не по контуру svg внутри, и с анимацией клика https://callstack.github.io/react-native-paper/touchable-ripple.html#style
  Button,
} from "react-native-paper";
// global imports
import {MAIN_RED, FADED_RED, GREY, WHITE} from "./../constants/colors";
import SvgBackCross from "./icons/backCross"
import SvgUpdatePills from "./icons/updatePills"

const UpdateModal = () => {
    const [visible, setVisible] = useState(true);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);


  return (
    <Provider>
    <Portal>
      <Overlay
        isVisible={visible}
        onBackdropPress={hideModal}
        overlayStyle= {styles.overlay}
      >
        <TouchableRipple onPress={hideModal} style = {styles.btBack} rippleColor={GREY}>
          <SvgBackCross/>
        </TouchableRipple>
        <SvgUpdatePills style={styles.svgPills}/>
        <Text style = {styles.text}>Вышла новая версия приложения. Желаете обновить?</Text>
        <Button style={styles.btUpdate} labelStyle={{color: WHITE}}>
          Обновить!
        </Button>
      </Overlay>
    </Portal>
  </Provider>
  );
};

export default UpdateModal;

const styles = StyleSheet.create({
  overlay: {
    borderRadius: 10,
  },
  btBack:{
    width: 25,
    height: 25,
    alignSelf: "flex-end",
    marginTop: 5,
    marginEnd: 5,
  },
  svgPills: {
    alignSelf: "center",
  },
  text: {
    width: Dimensions.get("window").width - 150,
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 25,
  },
  btUpdate:{
    backgroundColor: MAIN_RED,
    borderRadius: 40,
    width: Dimensions.get("window").width - 180,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 25,
  }
});


