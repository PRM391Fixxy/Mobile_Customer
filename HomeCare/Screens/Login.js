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
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Images, argonTheme } from "../constants";
import { Button, Icon, Input } from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
import NavigationService from "../navigation/navigate";
import DropdownAlert from "react-native-dropdownalert";
import * as axios from "axios";
import { LOGIN_ENDPOINT, GET_ALL_USER } from "../api/endpoint";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = { username: "", password: "" };
  static navigationOptions = {
    title: "Welcome"
  };
  _loginPage = async () => {
    if (this.state.username === "" || this.state.password === "") {
      this.dropDownAlertRef.alertWithType(
        "Warn",
        "FFIXXY Message",
        "Please fill all input fields"
      );
      return;
    } else {
      axios
        .post(LOGIN_ENDPOINT, {
          username: this.state.username,
          password: this.state.password
        })
        .then(function(res) {
          console.log(res.data);
          if (res.status == 200) {
            NavigationService.navigate("DashBoard");
          } else {
            alert("Check your account");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
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

                    <Block middle>
                      <Button
                        color="primary"
                        style={styles.createButton}
                        onPress={this._loginPage.bind(this)}
                      >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          LOGIN
                        </Text>
                      </Button>
                    </Block>
                    <Block right>
                      <TouchableOpacity
                        onPress={() => NavigationService.navigate("Register")}
                      >
                        <Text style={{ marginTop: 10 }} size={12} color="blue">
                          Register in here
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
    height: height * 0.52,
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
