import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const ReactNstivePicker = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return(
        <Picker
      prompt = "Введите язык"
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    )
}