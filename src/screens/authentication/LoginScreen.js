import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, TextInput } from "components";
import { fonts, colors } from "styles";
import axios from "axios";

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }

  signIn = async () => {
    const { email, password } = this.state;

    this.setState({ isLoading: true });

    if (!email || !password) {
      this.onSigninSuccess();
      return Alert.alert("An email and password is required");
    } else {
      await axios
        .post("http://localhost:4500/signin", {
          email,
          password
        })
        .then(result => {
          this.onSigninSuccess();

          const { role, _id, firstName, lastName, email } = result.data.user;
          const { message } = result.data;

          let userInfo = {
            id: _id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role
          };

          if (message === "User found" && role === "distributor") {
            AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
            return this.props.navigation.navigate("App");
          } else if (!message)
            return Alert.alert("Could not log you in, try again");
        })
        .catch(e => {
          this.onSigninSuccess();
          return Alert.alert("Invalid login details");
        });
    }
  };

  onSigninSuccess() {
    this.setState({
      email: "",
      password: "",
      isLoading: false
    });
  }

  render() {
    const {
      container,
      textStyle,
      headerText,
      passwordStyle,
      passwordText
    } = styles;

    return (
      <ScrollView contentContainerStyle={container}>
        <View>
          <Text style={headerText}>Welcome Back!</Text>
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

        <View style={passwordStyle}>
          <Text style={passwordText}>Forgot your password?</Text>
        </View>

        <Button style={styles.buttonStyle} onPress={this.signIn}>
          LOG IN
        </Button>
        <Text
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={textStyle}
        >
          Don't have an account? Sign Up.
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
  },
  passwordStyle: {
    alignSelf: "flex-start",
    marginBottom: 40,
    marginTop: 10,
    paddingLeft: 20
  },
  passwordText: {
    ...fonts.bold,
    fontSize: 14
  },
  headerText: {
    fontSize: 18,
    color: fonts.bold.color,
    fontWeight: "400",
    marginBottom: 40,
    fontFamily: fonts.title
  }
});

export default LoginScreen;
