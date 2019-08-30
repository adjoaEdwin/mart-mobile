import React, { Component } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Card } from "react-native-elements";
import { fonts } from "styles";

class DashboardScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Card containerStyle={styles.cardContainer}>
          <Text style={styles.titleStyle}>GHS 6.7K</Text>
          <Text style={styles.subtitleStyle}>Total Sales</Text>
        </Card>
        <Card containerStyle={styles.cardContainer}>
          <Text style={styles.titleStyle}>7</Text>
          <Text style={styles.subtitleStyle}>Orders Placed</Text>
        </Card>

        <Card containerStyle={styles.cardContainer}>
          <Text style={styles.titleStyle}>2500</Text>
          <Text style={styles.subtitleStyle}>Bags Purchased</Text>
        </Card>

        <Card containerStyle={styles.cardContainer}>
          <Text style={styles.titleStyle}>25</Text>
          <Text style={styles.subtitleStyle}>Commodities Traded</Text>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10
  },
  titleStyle: {
    ...fonts.bold,
    textAlign: "center",
    paddingTop: 10
  },
  subtitleStyle: {
    ...fonts.tertiary,
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 10
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
  }
});

export default DashboardStack;
