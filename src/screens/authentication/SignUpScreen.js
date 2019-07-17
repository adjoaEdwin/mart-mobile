import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryBtn from "components/Button";
import colors from "styles/colors";

class SignUpScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <PrimaryBtn title="Learn More" color={colors.primary} />
        <Text>Have an account? Log In </Text>
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

export default SignUpScreen;
