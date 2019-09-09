import React, { Component } from "react";
import { View, Text, StyleSheet, SectionList, Alert } from "react-native";
import { createStackNavigator } from "react-navigation";
import LogoutScreen from "../authentication/LogoutScreen";
import { sections } from "../../api/sectionItems";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "styles";
import ThemeContext from "../../context/ThemeContext";

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  getSectionListItem = item => {
    Alert.alert(item);
  };

  render() {
    const { sectionHeaderStyle, container } = styles;
    return (
      <ThemeContext.Consumer>
        {value => (
          <View style={(container, { backgroundColor: value })}>
            <SectionList
              sections={sections}
              renderSectionHeader={({ section }) => (
                <Text style={sectionHeaderStyle}> </Text>
              )}
              renderItem={({ item }) => (
                <ListItem
                  key={item}
                  bottomDivider
                  onPress={this.getSectionListItem.bind(this, item)}
                  title={item}
                  titleStyle={{ color: colors.lightGrey }}
                  leftIcon={
                    <Icon
                      name="airplane-takeoff"
                      size={25}
                      color={colors.lightGrey}
                    />
                  }
                  rightIcon={
                    <Icon
                      name="chevron-right"
                      size={25}
                      color={colors.lightGrey}
                    />
                  }
                />
              )}
              keyExtractor={(item, index) => index}
            />
            <LogoutScreen />
          </View>
        )}
      </ThemeContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeaderStyle: {
    fontSize: 20,
    padding: 10
  },
  container: {
    // backgroundColor: colors.background,
    flex: 1
  }
});

const SettingStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Settings",
        headerBackTitle: null
      };
    }
  }
});

export default SettingStack;
