import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput
} from "react-native";
import { Button } from "native-base";

import images from "@assets/images";
import * as layout from "../style/layout";
import * as color from "../style/color";
import { Actions } from "react-native-router-flux";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").width;

class LoginScreen extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.imageBox]}>
          <Image
            style={{
              width: deviceWidth * 0.6,
              height: deviceWidth * 0.6
            }}
            source={images.logo}
          />
        </View>
        <View style={{ flex: 0.6, width: "70%", flexDirection: "column" }}>
          <View style={[styles.formBox]}>
            <TextInput
              style={{
                height: 50,
                borderColor: "gray",
                backgroundColor: "#fff",
                marginBottom: 20
              }}
              placeholder="example@useremail.com"
              placeholderTextColor="#8e8e8e"
              keyboardType="email-address"
            />

            <TextInput
              style={{
                height: 50,
                borderColor: "gray",
                backgroundColor: "#fff",
                marginBottom: 30
              }}
              placeholder="Password"
              placeholderTextColor="#8e8e8e"
              secureTextEntry={true}
            />
          </View>

          <View style={[styles.buttonBox]}>
            <Button
              onPress={() => {
                Actions.tutorial();
              }}
              style={{ marginBottom: 20 }}
              block
              success
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>로그인</Text>
            </Button>
            <Button block danger>
              <Text style={{ fontSize: 20, color: "#fff" }}>회원가입</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f7f3e6",
    alignItems: "center"
  },
  imageBox: {
    flex: 0.5,
    justifyContent: "center"
  },
  formBox: {
    flex: 0.7
  },
  buttonBox: {
    flex: 0.7
  }
});
