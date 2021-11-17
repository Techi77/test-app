// modules
import React from "react";
import { Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, View, Platform } from "react-native";
import { Overlay } from "react-native-elements";// вместо import Modal from 'react-native-modal';
import {
  Portal,
  Provider,
  TouchableRipple, //что-то вроде TouchableOpacity, только не по контуру svg внутри, и с анимацией клика https://callstack.github.io/react-native-paper/touchable-ripple.html#style
  Button,
} from "react-native-paper";
// global imports
import { MAIN_RED, DARK_RED, GREY, WHITE, BLACK, NECTARINE, STAR_YELLOW } from "./../../constants/colors";
import SvgBackCross from "./../icons/backCross"
import SvgStars from "./../icons/rateApp/star"
import SvgProgrammer4StarsComponent from "./../icons/rateApp/programmer4stars"
import SvgProgrammer5StarsComponent from "./../icons/rateApp/programmer5stars"



export default class RateAppModal2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      modalText: "Мы усердно трудимся, чтобы приложение становилось удобнее для Вас. Лучшая похвала для нас - Ваша оценка.",
      pickedStar: -1, // -1 - пока не выбрали
      buttonText: "Оценить",
      programmerSvgFromState: <SvgProgrammer4StarsComponent />,
    };
  }

  render() {

    const { visible, modalText, pickedStar, buttonText, programmerSvgFromState } = this.state
    const starsColors = [BLACK, DARK_RED, MAIN_RED, NECTARINE, STAR_YELLOW]
    const programmerArray = [<SvgProgrammer4StarsComponent />, <SvgProgrammer4StarsComponent />, <SvgProgrammer4StarsComponent />, <SvgProgrammer4StarsComponent />, <SvgProgrammer5StarsComponent />]
    const goodRate = [3, 4]
    platformText = Platform.OS === `ios` ? "AppStore" : "Google Play"
    const rateAppInStoreText = "Оцените нас \n в " + platformText

    return (
      <Provider>
        <Portal>
          <Overlay
            isVisible={visible}
            onBackdropPress={() => this.setState({ visible: "false" })}
            overlayStyle={styles.overlay}
          >
            <ScrollView>
              <TouchableRipple
                onPress={() => this.setState({ visible: "false" })}
                style={styles.btBack} rippleColor={GREY}
              >
                <SvgBackCross />
              </TouchableRipple>
              <View style={styles.svgProgrammer}>
                {programmerSvgFromState}
              </View>
              <Text style={styles.text}>{modalText}</Text>
              <View style={styles.starsContainer}>
                {
                  starsColors.map((color, index) => {
                    if (index <= pickedStar) {
                      return (
                        <TouchableOpacity
                          style={styles.stars}
                          onPress={() => {
                            this.setState({
                              pickedStar: index,
                              buttonText: goodRate.includes(index) ? rateAppInStoreText : "Оценить",
                              programmerSvgFromState: programmerArray[index]
                            })

                          }}>
                          <SvgStars color={color} />
                        </TouchableOpacity>
                      )
                    }
                    else {
                      return (
                        <TouchableOpacity
                          style={styles.stars}
                          onPress={() =>
                            this.setState({
                              pickedStar: index,
                              buttonText: goodRate.includes(index) ? rateAppInStoreText : "Оценить",
                              programmerSvgFromState: programmerArray[index]
                            })}>
                          <SvgStars color={GREY} />
                        </TouchableOpacity>
                      )
                    }
                  })
                }
              </View>
              <Button style={styles.btUpdate} labelStyle={{ color: WHITE, fontSize: 18 }} uppercase={false}>
                {buttonText}
              </Button>
            </ScrollView>
          </Overlay>
        </Portal>
      </Provider>
    );
  };
};

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
    height: 230,
    width: 230,
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
  starsContainer: {
    flexDirection: "row",
    alignSelf: "center"
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

// function drawingStars() {
//   const starsColors = [BLACK, DARK_RED, MAIN_RED, NECTARINE, STAR_YELLOW]
//   for (let i = 0; i < starsColors.length; i++) {
//     if (i < pickedStar)
//       <SvgStars color={starsColors[i]} />
//     else
//       <SvgStars color={GREY} />
//     console.log("I'm working");
//   }
// }
