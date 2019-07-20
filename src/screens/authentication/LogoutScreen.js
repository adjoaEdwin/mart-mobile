import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "components";
import { withNavigation } from "react-navigation";

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  signOut = async () => {
    AsyncStorage.clear();

    this.props.navigation.navigate("Login");
  };

  render() {
    return <Button onPress={this.signOut}>LOG OUT</Button>;
  }
}

export default withNavigation(Logout);
