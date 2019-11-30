import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { ImageBackground, Image, StatusBar, Dimensions } from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

export default class Background extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block styles={{}}></Block>
            <Block styles={{}}></Block>
            <Block bottom>
              <Button
                style={{ ...styles.button }}
                color={argonTheme.COLORS.WHITE}
                onPress={() => navigate("Login")}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Get Started
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 3,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
    height: 150
  },
  button: {
    width: width - theme.SIZES.BASE * 8,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop: 70,
    opacity: 1
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: "relative",
    marginTop: "-50%"
  },
  title: {
    marginTop: "-5%"
  },
  subTitle: {
    marginTop: 20
  }
});
