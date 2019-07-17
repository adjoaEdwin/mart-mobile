import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryBtn from "components/Button";
import colors from "styles/colors";
import AsyncStorage from "@react-native-community/async-storage";

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.signIn();
  }

  signIn = async () => {
    await AsyncStorage.setItem("userToken", "abigail");
  };

  render() {
    return (
      <View style={styles.container}>
        <PrimaryBtn
          title="Sign In"
          color={colors.primary}
          onPress={() => {
            this.signIn;
          }}
        />
        <Text>Don't have an account? Sign up</Text>
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

export default LoginScreen;
