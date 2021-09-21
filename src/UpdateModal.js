// modules
import React from "react";
import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Overlay } from "react-native-elements";// вместо import Modal from 'react-native-modal';
import {
  Portal,
  Provider,
} from "react-native-paper";
// global imports
import {MAIN_RED, FADED_RED, GREY} from "./../constants/colors";
import SvgUpdateModal from "./icons/update"

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
      >
        <TouchableOpacity onPress={hideModal}>
          <SvgUpdateModal/>
        </TouchableOpacity>
        <Text>Hi</Text>
      </Overlay>
    </Portal>
  </Provider>
  );
};

export default UpdateModal;

const styles = StyleSheet.create({
  value: {
    fontFamily: "Helvetica_Neue",
    fontSize: 50,
    fontWeight: "400",
    textAlign: "center",
  },
  button: {
    paddingVertical: Platform.OS === "ios" ? 5 : 10,
    borderRadius: 25,
    fontFamily: "Helvetica_Neue",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    alignSelf: "flex-start",
    letterSpacing: 0.2,
    paddingStart: 10,
  },
});


