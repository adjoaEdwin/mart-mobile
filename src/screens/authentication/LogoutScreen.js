import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { withNavigation } from "react-navigation";
import { colors } from "styles/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  signOut = async () => {
    AsyncStorage.clear();

    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Text style={styles.textStyle}>
          <Icon name="power" size={25} />
          &nbsp;&nbsp;&nbsp;Log Out
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: colors.lightGrey,
    fontSize: 16,
    padding: 20
  }
});

export default withNavigation(Logout);
