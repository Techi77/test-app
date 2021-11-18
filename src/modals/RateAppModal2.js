// modules
import React from "react";
import { Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, View, Platform, Linking } from "react-native";
import { Overlay } from "react-native-elements";// вместо import Modal from 'react-native-modal';
import {
  Portal,
  Provider,
  TouchableRipple, //что-то вроде TouchableOpacity, только не по контуру svg внутри, и с анимацией клика
} from "react-native-paper";
// global imports
import { MAIN_RED, DARK_RED, GREY, WHITE, BLACK, NECTARINE, STAR_YELLOW, FADED_RED } from "./../../constants/colors";
import SvgBackCross from "./../icons/backCross"
import SvgStars from "./../icons/rateApp/star"
import SvgProgrammer1StarsComponent from "./../icons/rateApp/programmer1stars"
import SvgProgrammer2StarsComponent from "./../icons/rateApp/programmer2stars"
import SvgProgrammer3StarsComponent from "./../icons/rateApp/programmer3stars"
import SvgProgrammer4StarsComponent from "./../icons/rateApp/programmer4stars"
import SvgProgrammer5StarsComponent from "./../icons/rateApp/programmer5stars"
import { urlAppStoreKarat, urlGooglePlayKarat } from "./../../constants/urls";




export default class RateAppModal2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      bigText: -1,
      littleText: 0, //индекс в массиве какой сейчас маленький текст
      pickedStar: -1, // сколько звёзд поставили (-1 - пока не выбрали)
      buttonText: "Оценить",
      programmerSvgFromState: <SvgProgrammer4StarsComponent key ="pr4"/>,
    };
  }

  render() {
    const urlApp = Platform.OS == "ios" ? urlAppStoreKarat : urlGooglePlayKarat;
    const { visible, bigText, littleText, pickedStar, buttonText, programmerSvgFromState } = this.state
    const starsColors = [BLACK, DARK_RED, MAIN_RED, NECTARINE, STAR_YELLOW]
    const programmerArray = [<SvgProgrammer1StarsComponent key ="pr1"/>, <SvgProgrammer2StarsComponent key ="pr2"/>, <SvgProgrammer3StarsComponent key ="pr3"/>, <SvgProgrammer4StarsComponent key ="pr4"/>, <SvgProgrammer5StarsComponent key ="pr4"/>]
    const goodRate = [3, 4]
    platformText = Platform.OS === `ios` ? "App Store" : "Google Play"
    const rateAppInStoreText = "Оцените нас \n в " + platformText
    const bigTextArray = ["Ужасно", "Плохо", "Нормально", "Хорошо", "Отлично"]
    const littleTextArray = ["Мы усердно трудимся, чтобы приложение становилось удобнее для Вас. Лучшая похвала для нас - Ваша оценка.", "Спасибо за ваш отзыв", "Расскажите как нам улучшить приложение."]

    return (
      <Provider>
        <Portal>
          <Overlay
            isVisible={visible}
            onBackdropPress={() => this.setState({ visible: "false" })}
            overlayStyle={styles.overlay}
          >
              <TouchableRipple
                onPress={() => this.setState({ visible: "false" })}
                style={styles.btBack} 
              >
                <SvgBackCross style = {{alignSelf: "center"}}/>
              </TouchableRipple>
              <View style={styles.svgProgrammer}>
                {programmerSvgFromState}
              </View>
              <Text style={bigText!=-1 ? styles.bigText : {display: "none"}} >
                {bigTextArray[bigText]}
                </Text>
              <Text style={styles.littleText}>
                {littleTextArray[littleText]}
                </Text>
              <View style={styles.starsContainer}>
                {
                  starsColors.map((color, index) => {
                    if (index <= pickedStar) {
                      return (
                        <TouchableOpacity
                        key = {color}
                          style={styles.stars}
                          onPress={() => {
                            this.setState({
                              pickedStar: index,
                              buttonText: goodRate.includes(index) ? rateAppInStoreText : "Оценить",
                              programmerSvgFromState: programmerArray[index],
                              bigText: index,
                              littleText: goodRate.includes(index) ? 1 : 2,
                            })

                          }}>
                          <SvgStars color={color} key = {"star" + index}/>
                        </TouchableOpacity>
                      )
                    }
                    else {
                      return (
                        <TouchableOpacity
                        key = {color}
                          style={styles.stars}
                          onPress={() =>
                            this.setState({
                              pickedStar: index,
                              buttonText: goodRate.includes(index) ? rateAppInStoreText : "Оценить",
                              programmerSvgFromState: programmerArray[index],
                              bigText: index,
                              littleText: goodRate.includes(index) ? 1 : 2,
                            })}>
                          <SvgStars color={GREY} key = {"star" + index.toString()}/>
                        </TouchableOpacity>
                      )
                    }
                  })
                }
              </View>
              <TouchableRipple style={styles.btRate}
                onPress={() => Linking.openURL(urlApp)}
                underlayColor={FADED_RED}>
                <Text style={styles.btRateText}>
                  {buttonText}
                </Text>
              </TouchableRipple>
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
    width: Dimensions.get("screen").width - 50,
    minHeight: 480,

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
  bigText:{
    width: Dimensions.get("window").width - 150,
    fontSize: 36,
    lineHeight: 42,
    textAlign: "center",
    alignSelf: "center",
    minHeight: 55
  },
  littleText: {
    width: Dimensions.get("window").width - 150,
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 25,
    minHeight:55
  },
  starsContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  stars: {
    width: 45,
    height: 45,
    marginHorizontal: 2
  },
  btRate: {
    alignSelf: "center",
    backgroundColor: MAIN_RED,
    borderRadius: 40,
    width: Dimensions.get("window").width - 180,
    marginTop: 25,
    marginBottom: 25,
    minHeight: 45,
    justifyContent: "center"
  },
  btRateText: {
    color: WHITE,
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    borderRadius: 40,
  },
});
