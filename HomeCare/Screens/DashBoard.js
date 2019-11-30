import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { BackHandler, Alert } from "react-native";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import { Icon } from "@shoutem/ui";
import { Icon } from "react-native-elements";
import Home from "./Home";
import History from "./History";
import Setting from "./Setting";

export default class DashBoard extends Component {
  handleBackButton = () => {
    Alert.alert(
      "Exit App",
      "Exiting the application?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp()
        }
      ],
      {
        cancelable: true
      }
    );
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  render() {
    const TabNavigator = createMaterialBottomTabNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => <Icon name="home" color="#517fa4" />
          }
        },
        History: {
          screen: History,
          navigationOptions: {
            tabBarLabel: "History",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="history" type="font-awesome" color="#517fa4" />
            )
          }
        },
        Setting: {
          screen: Setting,
          navigationOptions: {
            tabBarLabel: "Setting",
            tabBarIcon: () => <Icon name="settings" color="#517fa4" />
          }
        }
      },
      {
        initialRouteName: "Home",
        activeColor: "#00365d",
        inactiveColor: "#00a294",
        shifting: true,

        barStyle: {
          backgroundColor: "white"
        }
      }
    );
    const AppContainer = createAppContainer(TabNavigator);
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
