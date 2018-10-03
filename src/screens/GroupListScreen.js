import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { Button } from "native-base";

import images from "@assets/images";
import * as layout from "../style/layout";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import GroupList from "../components/GroupList";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").width;

class GroupListScreen extends Component {
  constructor() {
    super();
    this.state = {
      datas: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };
  }

  render() {
    let grouplist = this.state.datas.map((value, index) => {
      <GroupList value={value} key={index} />;
    });
    console.log(grouplist);
    return (
      <View style={[styles.container]}>
        <View style={[styles.topBackground]} />
        <View style={[styles.bottomBackground]} />
        <View style={[styles.topLogo]}>
          <Image
            style={{
              width: deviceWidth * 0.3,
              height: deviceWidth * 0.3
            }}
            source={images.logo}
          />
          <Text style={[{ fontWeight: "bold", fontSize: 25, color: "#fff" }]}>
            모임 리스트
          </Text>
        </View>

        <View style={{ translateY: layout.deviceHeight * 0.45 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {grouplist}
          </ScrollView>
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
    //backgroundColor: "#4caf50",
    alignItems: "center",
    width: "100%"
  },
  topBackground: {
    flex: 0.35,
    height: layout.deviceHeight * 0.6,
    position: "absolute",
    width: layout.deviceWidth,
    backgroundColor: "#4caf50"
  },
  bottomBackground: {
    flex: 0.65,
    //height: 400,
    position: "absolute",
    width: layout.deviceWidth,
    backgroundColor: "#4caf50"
  },
  topLogo: {
    margin: 10,
    position: "absolute",
    alignItems: "center"
  },
  groupBox: {
    backgroundColor: "#fff",
    width: layout.deviceWidth * 0.85,
    height: layout.deviceHeight * 0.3,
    marginBottom: 30,
    elevation: 8
  }
});
