import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import Icons from "react-native-vector-icons/Ionicons";

class DashboardScreen extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>This is Dashboard</Text>
      </View>
    );
  }
}

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Dashboard",
        headerBackTitle: null
      };
    }
  }
});

export default DashboardStack;
