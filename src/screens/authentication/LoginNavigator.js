import React from "react";
import { createStackNavigator } from "react-navigation";
import LoginScreen from "./LoginScreen";

const LoginNavigator = createStackNavigator({
  LogIn: {
    screen: LoginScreen,
    navigationOptions: () => {
      return {
        headerBackTitle: null,
        header: null
      };
    }
  }
});

export default LoginNavigator;
