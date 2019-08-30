import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { fonts, colors } from "styles";

class WelcomeScreen extends Component {
  state = {};
  render() {
    const { spacer, container, textStyle, buttonStyle } = styles;

    return (
      <View style={container}>
        <View>
          <Icon name="seedling" size={50} style={{ textAlign: "center" }} />
          <Text style={textStyle}>martmobile</Text>
        </View>
        <View style={spacer} />

        <Button
          style={[
            buttonStyle,
            { backgroundColor: "#ff6345", borderColor: "transparent" }
          ]}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Icon name="envelope" size={25} />
          &nbsp;&nbsp;&nbsp;Log in with Email
        </Button>

        <View style={spacer} />

        <Button
          style={[buttonStyle, { backgroundColor: colors.primary }]}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Icon name="user" size={25} />
          &nbsp;&nbsp;&nbsp;Sign up With Email
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
