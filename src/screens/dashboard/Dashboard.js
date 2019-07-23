import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Button, Receipt } from "components";
import Icon from "react-native-vector-icons/FontAwesome5";

class DashboardScreen extends Component {
  state = {};
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate("Receipt")}>
          click to receipt
        </Button>
      </View>
    );
  }
}

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "MARTMOBILE",
        headerBackTitle: null,
        headerRight: (
          <Icon name="seedling" size={20} style={{ paddingRight: 30 }} />
        )
      };
    }
  },
  Receipt: {
    screen: Receipt,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Order Summary",
        headerBackTitle: null
      };
    }
  }
});

export default DashboardStack;
