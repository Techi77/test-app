import React from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';

import { WHITE, DARK_GREY, BLUE, GREEN } from "../../constants/colors";


export const  TooltipComponent  =  ( { 
    isFirstStep , 
    isLastStep , 
    handleNext , 
    handlePrev , 
    handleStop , 
    currentStep , 
  } )  =>  ( 
    <View>
      <View style={styles.tooltipContainer}>
        <Text testID="stepDescription" style={styles.tooltipText}>{currentStep.text}</Text>
      </View>
      <View style={[styles.bottomBar]}>
        {
          isFirstStep ?
            <TouchableOpacity onPress={handleStop}>
                <Text style={styles.buttonText}>{`Пропустить ${`\n`}обучение`}</Text>
            </TouchableOpacity>
            : null
        }
        {
          !isFirstStep ?
            <Button onPress={handlePrev} color = {BLUE}>
              НАЗАД
            </Button>
            : null
        }
        {
          !isLastStep ?
            <Button onPress={handleNext} color = {BLUE}>
              ДАЛЕЕ
            </Button> :
            <Button onPress={handleStop} color = {GREEN}>
              ЗАКОНЧИТЬ
            </Button>
        }
      </View>
    </View>
  ) ;
  

  const styles = StyleSheet.create({
    tooltipText: {
        maxWidth: Dimensions.get("screen").width - 170,
        fontSize: 15,
    },
    tooltipContainer: {
      flex: 1,
      backgroundColor: WHITE,
    },
    bottomBar: {
      flexDirection: "row",
      paddingVertical: 15,
      backgroundColor: WHITE,
      marginTop: 5,
    },
    buttonText: {
        color: DARK_GREY,
        fontSize: 15,
    }
  });