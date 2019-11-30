import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import { BackHandler, Alert } from "react-native";
import { Block, Checkbox, theme, NavBar } from "galio-framework";

import {
  Button,
  Select,
  Icon,
  Input,
  Header,
  Switch,
  Tabs
} from "../components/";
import { argonTheme } from "../constants/";
import { any } from "prop-types";
const { height, width } = Dimensions.get("screen");

export default class Home extends Component {
  a = any;
  defaultMenu = [
    { id: "dien", title: "Thiết bị Điện", active: false },
    { id: "nuoc", title: " Ống - Nước", active: false },
    { id: "khoa", title: "Các loại Khoá", active: false },
    { id: "goibaoduong", title: "Gói Bảo Dưỡng", active: false },
    { id: "thietbibep", title: "Thiết bị bếp", active: false }
  ];

  state = {
    option: "",
    address: "927 cách mạng tháng 8",
    equipment: "",
    description: ""
  };
  constructor(props) {
    super(props);
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

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  CheckState = () => {
    this.defaultMenu.forEach(e => {
      if (e.active === true) {
        this.state.option = e.id;
      }
    });
  };
  render() {
    const {
      title,
      white,
      transparent,
      bgColor,
      iconColor,
      titleColor,
      navigation,
      ...props
    } = this.props;
    const { routeName } = navigation.state;
    const noShadow = [
      "Search",
      "Categories",
      "Deals",
      "Pro",
      "Profile"
    ].includes(routeName);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: "rgba(0,0,0,0)" } : null
    ];

    const navbarStyles = [
      styles.navbar,
      bgColor && { backgroundColor: bgColor }
    ];

    return (
      <Block style={{ width: width, height: height }}>
        <Block style={{ marginTop: 30 }}>
          <NavBar
            title={"What proplem with your home ? "}
            rightStyle={{ alignItems: "center" }}
            leftStyle={{ paddingVertical: 12, flex: 0.2 }}
            titleStyle={[
              styles.title,
              { color: argonTheme.COLORS[white ? "WHITE" : "HEADER"] },
              titleColor && { color: titleColor }
            ]}
            {...props}
          />
        </Block>
        <Block top>
          <Tabs data={this.defaultMenu} horizontal={false} />
        </Block>
        <Block center style={{ ...styles.registerContainer, paddingTop: 10 }}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
            <Block
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 6
              }}
            >
              <Block
                center
                width={width * 0.75}
                style={{
                  marginTop: 5,
                  marginLeft: 15
                }}
              >
                <Text style={{ ...styles.title }}>Vị trí của bạn :</Text>
                <Input
                  borderless
                  placeholder={this.state.address}
                  onChangeText={content => this.setState({ address: content })}
                />
              </Block>
            </Block>

            <Block
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 6,
                marginTop: 15
              }}
            >
              <Block
                center
                width={width * 0.75}
                style={{
                  marginTop: 5,
                  marginLeft: 15
                }}
              >
                <Text style={{ ...styles.title }}>Thiết bị cần sửa :</Text>
                <Input
                  borderless
                  placeholder="Nhập thiết bị cần sửa"
                  onChangeText={content =>
                    this.setState({ equipment: content })
                  }
                />
              </Block>
              <Block
                center
                width={width * 0.75}
                style={{
                  marginTop: 5,
                  marginLeft: 15
                }}
              >
                <Text style={{ ...styles.title }}>Chi tiết</Text>
                <Input
                  borderless
                  placeholder="Chi tiết sửa chữa"
                  onChangeText={content =>
                    this.setState({ description: content })
                  }
                />
              </Block>
            </Block>

            <Block middle>
              <Button
                color="primary"
                style={styles.createButton}
                onPress={this.CheckState}
              >
                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  Xác Nhận
                </Text>
              </Button>
            </Block>
          </KeyboardAvoidingView>
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: "relative"
  },
  title: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold"
  },
  inputIcons: {
    marginRight: 12
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    zIndex: 5
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3
  },
  textArea: {
    height: 50,
    justifyContent: "flex-start",
    borderWidth: 0.1,
    borderColor: "black"
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: "absolute",
    top: 9,
    right: 12
  },
  header: {
    backgroundColor: theme.COLORS.WHITE
  },
  registerContainer: {
    width: width * 0.95,
    height: height * 0.7,
    backgroundColor: "white",
    borderRadius: 4,
    zIndex: 3,
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
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "400",
    color: argonTheme.COLORS.HEADER
  }
});
