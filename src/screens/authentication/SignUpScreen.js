import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, TextInput } from "components";
import fonts from "styles/fonts";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: ""
    };
  }

  render() {
    const { container, textStyle, headerText } = styles;

    return (
      <ScrollView contentContainerStyle={container}>
        <View>
          <Text style={headerText}>Sign Up Here</Text>
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

        <Button>SIGN UP</Button>
        <Text
          onPress={() => this.props.navigation.navigate("Login")}
          style={textStyle}
        >
          Already have an account? Log In.
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

export default SignUpScreen;
