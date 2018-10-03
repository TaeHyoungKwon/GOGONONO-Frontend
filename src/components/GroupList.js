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

const GroupList = props => {
  return (
    <View style={[styles.groupBox, { flexDirection: "row" }]}>
      <View style={[styles.leftPart, { flex: 0.75, flexDirection: "row" }]}>
        <View
          style={[
            styles.colorBar,
            {
              flex: 0.1,
              justifyContent: "center",
              alignItems: "center"
            }
          ]}
        >
          <View
            style={{
              flex: 0.8,
              backgroundColor: "red",
              width: 2
            }}
          />
        </View>
        <View style={[styles.main, { flex: 0.9, flexDirection: "column" }]}>
          <View
            style={[
              styles.contents,
              { alignItems: "center", marginTop: 10, flex: 0.65 }
            ]}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              공부하다 죽어라
            </Text>
          </View>
          <View
            style={[
              styles.result,
              {
                flex: 0.35,
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                justifyContent: "space-evenly"
              }
            ]}
          >
            <View style={([styles.complete], { flexDirection: "row" })}>
              <Image
                style={{
                  width: deviceWidth * 0.1,
                  height: deviceWidth * 0.1
                }}
                source={images.complete}
              />
              <View style={{ justifyContent: "flex-end" }}>
                <Text
                  style={{
                    fontSize: deviceWidth * 0.04,
                    fontWeight: "bold"
                  }}
                >
                  22건{" "}
                </Text>
              </View>
            </View>

            <View style={[styles.notComplete, { flexDirection: "row" }]}>
              <Image
                style={{
                  width: deviceWidth * 0.1,
                  height: deviceWidth * 0.1
                }}
                source={images.notcomplete}
              />
              <View style={{ marginLeft: 5, justifyContent: "flex-end" }}>
                <Text
                  style={{
                    fontSize: deviceWidth * 0.04,
                    fontWeight: "bold"
                  }}
                >
                  3건{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.bar,
          {
            flex: 0.05,
            justifyContent: "center",
            alignItems: "center"
          }
        ]}
      >
        <View
          style={{
            flex: 0.8,
            backgroundColor: "#000",
            width: 2
          }}
        />
      </View>
      <View style={[styles.rightPart, { flex: 0.2, flexDirection: "row" }]}>
        <View
          style={[
            styles.people,
            { alignItems: "center", justifyContent: "center" }
          ]}
        >
          <Image
            style={{
              width: deviceWidth * 0.12,
              height: deviceWidth * 0.12
            }}
            source={images.people}
          />
          <Text style={{ fontSize: deviceWidth * 0.04, fontWeight: "bold" }}>
            124
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GroupList;

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
