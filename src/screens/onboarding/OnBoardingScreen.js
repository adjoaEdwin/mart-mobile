import React, { Component } from "react";
import { View } from "react-native";
import { Spinner } from "components";
import AsyncStorage from "@react-native-community/async-storage";

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.loadApp();
  }

  loadApp = async () => {
    const userToken = await AsyncStorage.getItem("userInfo");

    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <View style={styles.AuthScreenStyles}>
        <Spinner />
      </View>
    );
  }
}

const styles = {
  AuthScreenStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default AuthLoadingScreen;
