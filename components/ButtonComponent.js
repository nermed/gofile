import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const ButtonComponent = ({ actionFn, mode, icon, label }) => {
  return (
    <Button
      icon={icon}
      mode={mode}
      style={{
        borderRadius: 8,
        backgroundColor: mode == "contained" ? "#922B21" : "transparent",
        borderColor: mode == "contained" ? "transparent" : "#922B21",
      }}
      labelStyle={{
        fontWeight: "700",
        color: mode == "contained" ? "#f7f7f7" : "#922B21",
      }}
      onPress={actionFn}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
