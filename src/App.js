import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Scene, Router, Stack } from "react-native-router-flux";

import LoginScreen from "./screens/LoginScreen";

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Router>
        <Stack>
          <Scene
            key="login"
            component={LoginScreen}
            title="Login"
            initial={true}
            hideNavBar={true}
            setBarStyle="light-content"
          />

          {/* <Scene
            key="timeTable"
            component={TimeTable}
            title="SGE TimeTable"
            hideNavBar={true}
            //style={{backgroundColor:"#17273d"}}
          /> */}
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
