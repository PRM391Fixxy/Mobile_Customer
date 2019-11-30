import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Platform,
  TextInput
} from "react-native";
import { createAppContainer } from "react-navigation";
import { BackHandler, Alert } from "react-native";
// import { Icon } from "react-native-elements";
import { Button, Icon, Input } from "../components";

const { width, height } = Dimensions.get("screen");
import {
  Caption,
  Subtitle,
  Divider,
  Tile,
  ImageBackground,
  TouchableOpacity
} from "@shoutem/ui";
import { Block, Checkbox, Text } from "galio-framework";
import { ScrollView } from "react-native-gesture-handler";
import { Images, argonTheme } from "../constants";

export default class Setting extends Component {
  constructor() {
    super();
    this.newState = { TextInputDisableStatus: false };
    this._changeStatus = this._changeStatus.bind(this);
  }
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
  // state = {};
  state = {
    Name: "Trần Văn Bình",
    Phone: "0907269083",
    Address: "927/8 cách mạng tháng 8 "
  };
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  _changeStatus = () => {
    if (this.newState.TextInputDisableStatus === true) {
      this.setState({ TextInputDisableStatus: false });
      this.newState.TextInputDisableStatus = false;
    } else {
      this.setState({ TextInputDisableStatus: true });
      this.newState.TextInputDisableStatus = true;
    }
  };
  render() {
    const Edit = <Text>Edit</Text>;
    const Submit = <Text>Submit</Text>;
    return (
      <>
        <View style={styles.navigation}>
          <StatusBar translucent />
          <Tile>
            <ImageBackground
              styleName="large-banner"
              source={{
                uri:
                  "https://shoutem.github.io/img/ui-toolkit/examples/image-7.png"
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>FIXXY</Text>
              <Text style={{ color: "white", fontSize: 20 }}>
                FPT University
              </Text>
            </ImageBackground>
          </Tile>
        </View>
        <ScrollView>
          <Block
            center
            style={{ backgroundColor: "red", ...styles.registerContainer }}
          >
            <Block flex center>
              <Block width={width * 0.9} style={{ marginBottom: 15 }}>
                <Input
                  borderless
                  placeholder={"Tên: " + this.state.Name}
                  editable={this.newState.TextInputDisableStatus}
                  onChangeText={content => this.setState({ username: content })}
                  iconContent={
                    <Icon
                      size={16}
                      color={argonTheme.COLORS.ICON}
                      name="hat-3"
                      family="ArgonExtra"
                      style={styles.inputIcons}
                    />
                  }
                />
              </Block>
              <Block width={width * 0.9} style={{ marginBottom: 15 }}>
                <Input
                  borderless
                  placeholder={"Số điện thoại :" + this.state.Phone}
                  editable={this.newState.TextInputDisableStatus}
                  onChangeText={content => this.setState({ username: content })}
                  iconContent={
                    <Icon
                      size={16}
                      color={argonTheme.COLORS.ICON}
                      name="padlock-unlocked"
                      family="ArgonExtra"
                      style={styles.inputIcons}
                    />
                  }
                />
              </Block>
              <Block width={width * 0.9} style={{ marginBottom: 15 }}>
                <Input
                  borderless
                  placeholder={"Địa chỉ :" + this.state.Address}
                  editable={this.newState.TextInputDisableStatus}
                  onChangeText={content => this.setState({ username: content })}
                  iconContent={
                    <Icon
                      size={16}
                      color={argonTheme.COLORS.ICON}
                      name="padlock-unlocked"
                      family="ArgonExtra"
                      style={styles.inputIcons}
                    />
                  }
                />
              </Block>
            </Block>
            <Button
              color="primary"
              style={styles.createButton}
              onPress={this._changeStatus}
            >
              <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                {this.newState.TextInputDisableStatus ? Submit : Edit}
              </Text>
            </Button>
          </Block>
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  registerContainer: {
    width: width * 0.95,
    height: height * 0.4,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  blockStyle: {
    width: width * 0.85,
    height: height * 0.05,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    justifyContent: "flex-start",
    marginTop: 10,
    flexDirection: "row"
  },
  IconBlock: {
    width: 35,
    height: height * 0.05,
    justifyContent: "flex-start"
  },
  inputIcons: {
    marginRight: 20,
    marginLeft: 15,
    borderColor: "black"
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});
