import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Button } from "native-base";

import images from "@assets/images";
import * as layout from "../style/layout";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").width;

class GroupListScreen extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.topBackground]} />
        <View style={[styles.bottomBackground]} />
        <View style={[styles.topLogo]}>
          <Image
            style={{
              width: deviceWidth * 0.4,
              height: deviceWidth * 0.4
            }}
            source={images.logo}
          />
          <Text style={[{ fontWeight: "bold", fontSize: 25, color: "#fff" }]}>
            모임 리스트
          </Text>
        </View>
      </View>
    );
  }
}

export default GroupListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "#f7f3e6",
    alignItems: "center",
    width: "100%"
  },
  topBackground: {
    flex: 0.35,
    width: layout.deviceWidth,
    backgroundColor: "#4caf50"
  },
  bottomBackground: {
    flex: 0.65,
    width: layout.deviceWidth,
    backgroundColor: "#ededed"
  },
  topLogo: {
    position: "absolute",
    alignItems: "center"
  }
});
