import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import Icons from "react-native-vector-icons/Ionicons";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>This is Home</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerBackTitle: null
      };
    }
  }
});

export default HomeStack;
