import * as React from "react";
import { useState } from "react";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const MyComponent = ({ placeholder, items, onValueChange, value, style }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const [selectedLabel, setSelectedLabel] = useState(null);

  const renderItem = ({ item }) => {
    console.log(
      "Я (renderItem) работаю и у меня есть selectedLabel=" + selectedLabel
    );
    const backgroundColor =
      item.label === selectedLabel ? "#6e3b6e" : "#f9c2ff";
    const color = item.label === selectedLabel ? "white" : "black";

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.item, backgroundColor]}
      >
        <Text style={[styles.value, textColor]}>{item.value}</Text>
      </TouchableOpacity>
    );

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedLabel(item.label);
          hideModal();
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
            extraData={selectedLabel}
          />
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        {selectedLabel == null ? placeholder : selectedLabel}
      </Button>
    </Provider>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  value: {
    fontSize: 32,
    color: "red",
  },
});
