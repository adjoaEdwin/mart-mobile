import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, TextInput } from "components";
import fonts from "styles/fonts";

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: ""
    };

    this.signIn = this.signIn.bind(this);
  }

  signIn = async () => {
    await AsyncStorage.setItem("userToken", "abigail");

    this.props.navigation.navigate("App");
  };

  render() {
    const { container, textStyle, headerText } = styles;

    return (
      <ScrollView contentContainerStyle={container}>
        <View>
          <Text style={headerText}>Log In</Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Username or Email"
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          autoCorrect={false}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />

        <Button
          onPress={() => {
            this.signIn();
          }}
        >
          LOGIN
        </Button>
        <Text
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={textStyle}
        >
          Don't have an account? Sign up
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    ...fonts.text,
    marginTop: 50
  },
  headerText: {
    ...fonts.heading,
    marginBottom: 50,
    fontFamily: fonts.title
  }
});

export default LoginScreen;
