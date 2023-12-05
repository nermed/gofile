import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import FileList from "../screens/FileList";
import { NavigationContainer } from "@react-navigation/native";
import SaveFile from "../screens/SaveFile";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            // headerShown: false
          }
        }
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="FileList"
          options={{ headerBackTitleVisible: false, title: "Files found" }}
          component={FileList}
        />
        <Stack.Screen
          name="SaveFile"
          options={{ headerBackTitleVisible: false, title: "Upload your file" }}
          component={SaveFile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
