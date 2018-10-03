import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import images from "@assets/images";
import * as layout from "../style/layout";
import * as color from "../style/color";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").width;

class LoginScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <View
        style={[
          layout.styles.container,
          { backgroundColor: color.styles.loginBackground }
        ]}
      >
        <View style={{ margin: 20 }}>
          <Image
            style={{ width: deviceWidth * 0.6, height: deviceWidth * 0.6 }}
            source={images.logo}
          />
        </View>
        <View />
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({});
