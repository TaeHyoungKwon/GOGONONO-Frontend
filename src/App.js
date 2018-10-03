import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Scene, Router, Stack } from "react-native-router-flux";

import LoginScreen from "./screens/LoginScreen";
import TutorialScreen from "./screens/TutorialScreen";
import GroupListScreen from "./screens/GroupListScreen";

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

          <Scene
            key="tutorial"
            component={TutorialScreen}
            title="Tutorial"
            hideNavBar={true}
            //style={{backgroundColor:"#17273d"}}
          />

          <Scene
            key="groupList"
            component={GroupListScreen}
            title="GroupList"
            hideNavBar={true}
            //style={{backgroundColor:"#17273d"}}
          />
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
