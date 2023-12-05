import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, Searchbar, TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GlobalModalList from "../components/GlobalModalList";
import ButtonComponent from "../components/ButtonComponent";

const Home = ({ navigation }) => {
  const [modalFileType, setModalFileType] = useState(false);
  const openModalFileType = () => setModalFileType(true);
  const closeModalFileType = () => setModalFileType(false);
  return (
    <View
      style={{
        gap: 8,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <TouchableOpacity style={{ width: "80%" }} onPress={() => openModalFileType()}>
        <View
          style={{
            height: 48,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderColor: "#922B21",
            borderRadius: 8,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 8,
            }}
          >
            <Text style={{ color: "#1f1f1f" }}>Select the file type</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color={"#1f1f1f"}
            />
          </View>
        </View>
      </TouchableOpacity> */}
      <Searchbar
        placeholder="Enter the name of your file"
        mode="bar"
        placeholderTextColor={"#1f1f1f"}
        iconColor={"#922B21"}
        style={{
          width: "80%",
          borderRadius: 8,
          backgroundColor: "#f7f7f7",
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: "#922B21",
          color: "#1f1f1f",
        }}
      />
      <View style={{ flexDirection: "row", gap: 4 }}>
        <ButtonComponent
          actionFn={() => navigation.navigate("FileList")}
          icon="magnify"
          mode={"contained"}
          label="Search"
        />
        <ButtonComponent
          actionFn={() => navigation.navigate("SaveFile")}
          icon="file"
          mode={"outlined"}
          label="Upload"
        />
        {/* <Button
          icon={"file"}
          mode="outlined"
          style={{ borderRadius: 8, borderColor: "#922B21" }}
          labelStyle={{ fontWeight: "700", color: "#922B21" }}
          onPress={() => navigation.navigate("SaveFile")}
        >
          Upload
        </Button> */}
      </View>
      <GlobalModalList isVisible={modalFileType} onClose={closeModalFileType} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
