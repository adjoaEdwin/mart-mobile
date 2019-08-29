import React, { Component } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "components";
import { withNavigation } from "react-navigation";
import { colors } from "../../styles/colors";

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  signOut = async () => {
    AsyncStorage.clear();

    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <Button style={styles.buttonStyle} onPress={this.signOut}>
        LOG OUT
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    alignSelf: "stretch",
    borderWidth: 1,
    backgroundColor: colors.primary,
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 20
  }
});

export default withNavigation(Logout);
