import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import LogoutScreen from "../authentication/LogoutScreen";

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Settings</Text>
        <LogoutScreen />
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

const SettingStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Settings",
        headerBackTitle: null
      };
    }
  }
});

export default SettingStack;
