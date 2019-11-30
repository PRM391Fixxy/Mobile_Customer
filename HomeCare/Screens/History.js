import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { BackHandler, Alert } from "react-native";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from "react-native-elements";

export default class History extends Component {
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
    return <View></View>;
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
