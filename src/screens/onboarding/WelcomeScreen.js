import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "components";

class WelcomeScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate("Login")}>
          LOGIN
        </Button>
        <Button onPress={() => this.props.navigation.navigate("SignUp")}>
          SIGN UP
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default WelcomeScreen;
