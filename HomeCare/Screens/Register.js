import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  AsyncStorage
} from "react-native";
import { POST, PUT, GET } from "../api/caller";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Images, argonTheme } from "../constants";
import { Button, Icon, Input } from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
import NavigationService from "../navigation/navigate";
import DropdownAlert from "react-native-dropdownalert";
import { USER_REGISTER_ENDPOINT } from "../api/endpoint";
import * as axios from "axios";
export default class Regiter extends Component {
  constructor(props) {
    super(props);
  }
  state = { username: "", password: "", role: "string" };
  repassword = "";
  static navigationOptions = {
    title: "Welcome"
  };
  _loginPage = async () => {
    if (
      this.state.username.length > 2 ||
      this.state.password.length > 2 ||
      this.repassword.length > 2
    ) {
      if (this.state.password === this.repassword) {
        axios
          .post(USER_REGISTER_ENDPOINT, {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
          })
          .then(function(res) {
            console.log(res);
            if (res.status == 200) {
              // NavigationService.navigate("Login");
              console.log(AsyncStorage.getItem("device_id"));
            } else {
              alert("Tài khoản đã tồn tại");
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        this.dropDownAlertRef.alertWithType(
          "Warn",
          "FFIXXY Message",
          "Check your password"
        );
      }
    } else {
      this.dropDownAlertRef.alertWithType(
        "Warn",
        "FFIXXY Message",
        "Please fill all input fields and need more 8 charater"
      );
      return;
    }
  };
  render() {
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
            <Block style={{ ...styles.registerContainer, paddingTop: 10 }}>
              <Block flex={0.25} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Sign up with
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button
                    style={{
                      ...styles.socialButtons,
                      marginRight: 30,
                      marginBottom: 5
                    }}
                  >
                    <Block row>
                      <Icon
                        name="logo-facebook"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{
                          marginTop: 2,
                          marginRight: 5
                        }}
                      />
                      <Text style={styles.socialTextButtons}>FACEBOOK</Text>
                    </Block>
                  </Button>
                  <Button style={{ ...styles.socialButtons, marginBottom: 5 }}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{
                          marginTop: 2,
                          marginRight: 5
                        }}
                      />
                      <Text style={styles.socialTextButtons}>GOOGLE</Text>
                    </Block>
                  </Button>
                </Block>
              </Block>
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    Or sign up the classic way
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.68} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Username"
                        onChangeText={content =>
                          this.setState({ username: content })
                        }
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
                    <Block width={width * 0.68}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        onChangeText={content =>
                          this.setState({ password: content })
                        }
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
                    <Block width={width * 0.68}>
                      <Input
                        password
                        borderless
                        placeholder="Enter the password again"
                        onChangeText={content => {
                          this.repassword = content;
                        }}
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
                    <Block middle>
                      <Button
                        color="primary"
                        style={styles.createButton}
                        onPress={this._loginPage}
                      >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Register
                        </Text>
                      </Button>
                    </Block>
                    <Block right>
                      <TouchableOpacity
                        onPress={() => NavigationService.navigate("Login")}
                      >
                        <Text style={{ marginTop: 10 }} size={12} color="blue">
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.75,
    height: height * 0.65,
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
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  registerButton: {
    width: width * 0.5,
    backgroundColor: "white",
    opacity: 0
  }
});
