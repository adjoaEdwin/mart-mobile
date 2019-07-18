import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

class Orders extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>This is the Orders</Text>
      </View>
    );
  }
}

const OrderStack = createStackNavigator({
  Home: {
    screen: Orders,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Orders",
        headerBackTitle: null
      };
    }
  }
});

export default OrderStack;
