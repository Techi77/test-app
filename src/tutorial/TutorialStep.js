import React from "react";
import { View, StyleSheet} from "react-native";
import { walkthroughable, CopilotStep } from "react-native-copilot";

import { tutorialConstant } from "../../constants/tutorialConstants";

export const TutorialStep = ({ order, insideBlock }) => {
    const WalkthroughableView = walkthroughable(View)

      return (
        <CopilotStep
        text= {tutorialConstant[order].text}
        order={order}
        name={tutorialConstant[order].name}>
        <WalkthroughableView style={styles.title}>
          {insideBlock}
        </WalkthroughableView>
      </CopilotStep>
      )
}
  
  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      textAlign: "center",
      height: 50,
    }
  });
  