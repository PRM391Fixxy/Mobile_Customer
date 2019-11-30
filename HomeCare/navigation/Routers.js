import React, { Component } from "react";

import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "../Screens/Login";
import DashBoard from "../Screens/DashBoard";
import MainScreen from "../Screens/MainScreen";
import Background from "../Screens/Background";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Pro from "../Screens/Pro";
import Home from "../Screens/Home";
import Register from "../Screens/Register";

const Container = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    MainScreen: {
      screen: MainScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    DashBoard: {
      screen: DashBoard,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Background: {
      screen: Background,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Pro: {
      screen: Pro,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Register: {
      screen: Register,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: "Login"
  }
);
export default Container;
