import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Button, Receipt } from "components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "styles";

class DashboardScreen extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <View>
          <Button
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate("Receipt")}
          >
            click to receipt
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    alignSelf: "stretch",
    borderWidth: 1,
    backgroundColor: colors.primary,
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 20
  }
});

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
