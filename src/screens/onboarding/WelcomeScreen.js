import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PrimaryBtn from "components/Button";
import colors from "styles/colors";

class WelcomeScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <PrimaryBtn title="Welcome" color={colors.primary} />
        <PrimaryBtn
          title="Sign Up"
          color={colors.primary}
          onPress={() => this.props.navigation.navigate("SignUp")}
        />
        <PrimaryBtn
          title="Log in"
          color={colors.primary}
          onPress={() => this.props.navigation.navigate("LogIn")}
        />
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
