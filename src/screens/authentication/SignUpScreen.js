import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, TextInput } from "components";
import { fonts } from "styles";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { container, textStyle, headerText } = styles;

    return (
      <ScrollView contentContainerStyle={container}>
        <View>
          <Text style={headerText}>Sign Up</Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          autoCorrect={false}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />

        <View style={{ marginTop: 40 }} />

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
    ...fonts.tertiary,
    marginTop: 50
  },
  headerText: {
    fontSize: 18,
    color: fonts.bold.color,
    fontWeight: "400",
    marginBottom: 40,
    fontFamily: fonts.title
  }
});

export default SignUpScreen;
