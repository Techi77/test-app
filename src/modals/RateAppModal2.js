// modules
import React from "react";
import { useState } from "react";
import { Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";// вместо import Modal from 'react-native-modal';
import {
  Portal,
  Provider,
  TouchableRipple, //что-то вроде TouchableOpacity, только не по контуру svg внутри, и с анимацией клика https://callstack.github.io/react-native-paper/touchable-ripple.html#style
  Button,
} from "react-native-paper";
// global imports
import {MAIN_RED, FADED_RED, GREY, WHITE, BLACK} from "./../../constants/colors";
import SvgBackCross from "./../icons/backCross"
import SvgStars from "./../icons/rateApp/star"
import SvgProgrammer4StarsComponent from "./../icons/rateApp/programmer4stars"


const RateAppModal2 = () => {
    const [visible, setVisible] = useState(true);

    const hideModal = () => setVisible(false);

    const [modalText, setModalText] = useState("Мы усердно трудимся, чтобы приложение становилось удобнее для Вас. Лучшая похвала для нас - Ваша оценка.");

    const [color, setStarColor] = useState(GREY);

    return (
        <Provider>
    <Portal>
      <Overlay
        isVisible={visible}
        onBackdropPress={hideModal}
        overlayStyle= {styles.overlay}
      >
          <ScrollView>
        <TouchableRipple onPress={hideModal} style = {styles.btBack} rippleColor={GREY}>
          <SvgBackCross/>
        </TouchableRipple>
        <SvgProgrammer4StarsComponent style={styles.svgProgrammer}/>
        <Text style = {styles.text}>{modalText}</Text>
        <TouchableOpacity onPress={hideModal} style = {styles.stars}>
          <SvgStars color = {color}/>
        </TouchableOpacity>
        <Button style={styles.btUpdate} labelStyle={{color: WHITE, fontSize: 18}} uppercase={false}>
          Оценить
        </Button>
        </ScrollView>
      </Overlay>
    </Portal>
  </Provider>
    );
};

export default RateAppModal2;

const styles = StyleSheet.create({
    overlay: {
        borderRadius: 10,
        minWidth: 280,
        width: Dimensions.get("screen").width - 40,
        minHeight: 480,
        height: Dimensions.get("screen").height - 160,
        
    },
    btBack: {
        width: 25,
        height: 25,
        alignSelf: "flex-end",
        marginTop: 20,
        marginEnd: 20,
    },
    svgProgrammer: {
        alignSelf: "center",
    },
    text: {
        width: Dimensions.get("window").width - 150,
        fontSize: 18,
        lineHeight: 21,
        textAlign: "center",
        marginTop: 25,
        alignSelf: "center",
    },
    stars: {
        width: 45,
        height: 45,
    },
    btUpdate: {
        alignSelf: "center",
        backgroundColor: MAIN_RED,
        borderRadius: 40,
        width: Dimensions.get("window").width - 180,
        alignSelf: "center",
        marginTop: 25,
        marginBottom: 25,
    }
});


