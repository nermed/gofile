import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { List } from "react-native-paper";

const GlobalModalList = ({ children, isVisible, onAction, onClose, title }) => {
  const separator = () => (
    <View style={{ height: 0.9, backgroundColor: "gray" }} />
  );
  return (
    <Modal
      onRequestClose={() => onClose()}
      visible={isVisible}
      transparent={true}
      animationType="slide"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#0000002A" }}>
          <TouchableWithoutFeedback onPress={() => onClose()}>
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>

          <View style={styles.contentPop}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View />
              <Text style={styles.titlePop}>{title}</Text>
              <Icon
                name="close"
                size={20}
                color={"#1f1f1f"}
                onPress={() => onClose()}
              />
            </View>

            {separator()}
            <FlatList
              data={["Images", "Videos", "Documents"]}
              renderItem={({ item }) => <List.Item title={item} />}
              keyExtractor={(_, indx) => indx.toString()}
              ItemSeparatorComponent={() => (
                <View style={{ paddingHorizontal: 16 }}>{separator()}</View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default GlobalModalList;

const styles = StyleSheet.create({
  titlePop: {
    // ...FONTS.body3,
    color: "#1f1f1f",
    textAlign: "center",
    paddingBottom: 8,
    fontWeight: "500",
  },
  contentPop: {
    backgroundColor: "#f7f7f7",
    justifyContent: "flex-end",
    borderRadius: 8,
    padding: 8,
    // minHeight: SIZES.height / 1.8,
  },
});
