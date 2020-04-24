import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
import { transitionConfig } from "./DefaultTransitionConfig";
import Login from "../screens/Login";

let stack = {
  Login: { screen: Login },
};
export const RootStack = createStackNavigator(stack, {
  initialRouteName: "Login",
  navigationOptions: ({ navigation }) => ({
    headerTitleStyle: { fontWeight: "400" },
  }),
  transitionConfig,
});

const RootStackContainer = createAppContainer(RootStack);
export default RootStackContainer;
