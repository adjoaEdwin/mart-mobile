import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, TextInput, Spinner } from "components";
import { fonts, colors } from "styles";
import axios from "axios";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      message: "",
      isLoading: false
    };
  }

  signUp = async () => {
    const { email, password, firstName, lastName } = this.state;

    this.setState({ isLoading: true });

    if (!firstName || !lastName || !email || !password) {
      this.onSignupSuccess();
      return Alert.alert("Fill all fields");
    } else {
      await axios
        .post("http://localhost:4500/signup", {
          firstName,
          lastName,
          email,
          password
        })
        .then(result => {
          this.onSignupSuccess();

          const { role } = result.data.user;
          const { message } = result.data;

          if (message === "User created" && role === "distributor") {
            return this.props.navigation.navigate("App");
          } else if (!message)
            return Alert.alert("Could not sign you up, try again");
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  onSignupSuccess() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isLoading: false
    });
  }

  renderbutton() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    return (
      <Button style={styles.buttonStyle} onPress={this.signUp}>
        SIGN UP
      </Button>
    );
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
          placeholder="First Name"
          value={this.state.firstName}
          onChangeText={firstName => this.setState({ firstName })}
          autoCorrect={false}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Last Name"
          value={this.state.lastName}
          onChangeText={lastName => this.setState({ lastName })}
          autoCorrect={false}
        />

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

        {this.renderbutton()}

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
  headerText: {
    fontSize: 18,
    color: fonts.bold.color,
    fontWeight: "400",
    marginBottom: 40,
    fontFamily: fonts.title
  },
  error: {
    alignSelf: "flex-start",
    color: "red",
    paddingLeft: 20
  }
});

export default SignUpScreen;
