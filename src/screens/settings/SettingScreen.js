import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "components";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.signOut();
  }

  signOut = async () => {
    AsyncStorage.clear();

    this.props.navigation.navigate("OnBoarding");
  };

  render() {
    return (
      <View>
        <Text>This is the Settings</Text>
        <Button
          title="Sign Out"
          onPress={() => {
            this.signOut;
          }}
        >
          LOGOUT
        </Button>
      </View>
    );
  }
}

const SettingStack = createStackNavigator({
  Home: {
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
