import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
import { transitionConfig } from "./DefaultTransitionConfig";
import Login from "../screens/Login";
import Conversation from '../screens/Conversation'
import Notification from '../screens/Notification'
import DetailNews from '../screens/DetailNews'
import DetailNotification from '../screens/DetailNotification'
import Home from "../screens/Home";


let stack = {
  Login: { screen: Login },
  Notification: { screen: Notification },
  DetailNews: { screen: DetailNews },
  DetailNotification: { screen: DetailNotification },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Conversation: {
    screen: Conversation,
    navigationOptions: {
      header: null,
    },
  },
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
