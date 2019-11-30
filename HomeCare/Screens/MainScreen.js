import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";
const { width } = Dimensions.get("screen");
import { Block, Text, Button as GaButton, theme } from "galio-framework";

export default class MainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Block style={{ marginBottom: theme.SIZES.BASE }}>
        <Header
          options
          search
          title="Title"
          optionLeft="Option 1"
          optionRight="Option 2"
          navigation={this.props.navigation}
        />
      </Block>
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
