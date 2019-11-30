import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/navigate";
import { createAppContainer } from "react-navigation";
import Container from "./navigation/Routers";

export const AppContainer = createAppContainer(Container);
export default class App extends Component {
  
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          Navigation.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
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
