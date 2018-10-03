import { Dimensions } from "react-native";

export const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%"
  }
};

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").width;
