import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Button, Receipt } from "components";
import Icon from "react-native-vector-icons/FontAwesome5";
import Products from "components/Products";
import { colors } from "styles";

class DashboardScreen extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <View>
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Button onPress={() => this.props.navigation.navigate("Receipt")}>
            click to receipt
          </Button>
        </View>
      </ScrollView>
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
