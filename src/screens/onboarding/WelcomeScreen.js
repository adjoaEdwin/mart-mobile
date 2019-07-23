import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { fonts, colors } from "styles";

class WelcomeScreen extends Component {
  state = {};
  render() {
    const { spacer, container, textStyle, buttonStyle, iconContainer } = styles;

    return (
      <View style={container}>
        <View style={iconContainer}>
          <Icon name="seedling" size={50} style={{ textAlign: "center" }} />
          <Text style={textStyle}>martmobile</Text>
        </View>

        <Button
          style={[
            buttonStyle,
            { backgroundColor: "#ff6345", borderColor: "transparent" }
          ]}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Icon
            name="user-plus"
            size={25}
            style={{ backgroundColor: "#ff00ff", marginLeft: 30 }}
          />
          Log in with Email
        </Button>

        <View style={spacer} />

        <Button
          style={[buttonStyle, { backgroundColor: colors.primary }]}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          Sign up
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
  },
  iconContainer: {
    marginBottom: 100
  },
  buttonStyle: {
    borderRadius: 5,
    alignSelf: "stretch",
    borderWidth: 1,
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 20
  },
  textStyle: {
    ...fonts.bold,
    alignSelf: "center"
  },
  spacer: {
    margin: 5
  }
});

export default WelcomeScreen;
