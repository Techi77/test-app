import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from 'react-native-paper';


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
            <Button onPress={handleStop}>
              Я всё знаю
            </Button>
            : null
        }
        {
          !isFirstStep ?
            <Button onPress={handlePrev}>
              Назад
            </Button>
            : null
        }
        {
          !isLastStep ?
            <Button onPress={handleNext}>
              Далее
            </Button> :
            <Button onPress={handleStop}>
              Закончить обучение
            </Button>
        }
      </View>
    </View>
  ) ;
  

  const styles = StyleSheet.create({
    tooltip: {
      position: 'absolute',
      paddingTop: 15,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      borderRadius: 3,
      overflow: 'hidden',
    },
    tooltipText: {
  
    },
    tooltipContainer: {
      flex: 1,
    },
    bottomBar: {
      marginTop: 10,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
  });