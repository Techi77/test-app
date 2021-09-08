import React from "react";
import { useState } from "react";
import {
  Portal,
  Button,
  RadioButton,
  Provider,
  Searchbar,
} from "react-native-paper";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import { Overlay } from "react-native-elements";

const COLOR = {
  buttonTextColor: "black",
};

const InputForSelectionFinder = ({ placeholder, items, style }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const [value, setValue] = useState(""); //Удалить при переносе!! Заменить всё, связанное с value

  return (
    <Provider>
      <Portal>
        <Overlay
          isVisible={visible}
          onBackdropPress={hideModal}
          overlayStyle={{ height: 400, marginVertical: 50, width: 300 }}
        >
          <Searchbar
            placeholder={placeholder}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <ScrollView>
            <RadioButton.Group
              value={value}
              onValueChange={(value) => {
                hideModal();
                setValue(value);
              }}
            >
              {items.map((items) => {
                if (items.label.includes(searchQuery) && searchQuery != "")
                  return (
                    <RadioButton.Item label={items.label} value={items.value} />
                  );
              })}
            </RadioButton.Group>
          </ScrollView>
        </Overlay>
      </Portal>
      <Button
        onPress={showModal}
        color={COLOR.buttonTextColor}
        uppercase={false}
        labelStyle={style == null ? styles.button : style}
      >
        {value === "" ? placeholder : value}
      </Button>
    </Provider>
  );
};

export default InputForSelectionFinder;

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
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    alignSelf: "flex-start",
    letterSpacing: 0.2,
    paddingStart: 10,
    width: Dimensions.get("window").width - 30,
  },
});
