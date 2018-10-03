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
import * as color from "../style/color";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Actions } from "react-native-router-flux";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").width;

class TutorialScreen extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.logo, { flex: 0.6 }]}>
          <Image
            style={{
              width: deviceWidth * 0.6,
              height: deviceWidth * 0.6,
              marginTop: 30
            }}
            source={images.logo}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>ㄱㄱㄴㄴ</Text>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              사용이 처음 인가요?
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.buttons,
            { flexDirection: "row", justifyContent: "space-between", flex: 0.4 }
          ]}
        >
          <View style={[styles.leftButton]}>
            <TouchableOpacity
              onPress={() => {
                Actions.groupList();
              }}
            >
              <Image
                style={{
                  width: deviceWidth * 0.4,
                  height: deviceWidth * 0.4,
                  marginTop: 30
                }}
                source={images.tutorial_red}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.rightButton]}>
            <Image
              style={{
                width: deviceWidth * 0.4,
                height: deviceWidth * 0.4,
                marginTop: 30
              }}
              source={images.tutorial_green}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default TutorialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f7f3e6",
    alignItems: "center",
    width: "100%"
  },
  imageBox: {
    flex: 0.5,
    justifyContent: "center"
  },
  formBox: {
    flex: 0.7
  },
  buttonBox: {
    flex: 0.7,
    width: "100%"
  },
  leftButton: {
    marginRight: 20
  },
  rightButton: {}
});
