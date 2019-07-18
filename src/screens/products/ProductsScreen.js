import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

class Products extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>This is the Products</Text>
      </View>
    );
  }
}

const ProductStack = createStackNavigator({
  Home: {
    screen: Products,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Products",
        headerBackTitle: null
      };
    }
  }
});

export default ProductStack;
