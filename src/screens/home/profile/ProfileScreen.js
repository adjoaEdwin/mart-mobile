import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

class Profile extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>This is the Profile</Text>
      </View>
    );
  }
}

const ProfileStack = createStackNavigator({
  Home: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Profile",
        headerBackTitle: null
      };
    }
  }
});

export default ProfileStack;
