import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { fonts, colors } from "styles";
import { toggleImage } from "styles/images";
import { withNavigation } from "react-navigation";

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      imageStyle,
      summaryContainer,
      leftContainer,
      rightItems,
      container
    } = styles;
    const { crop, price, id } = this.props;
    const { push } = this.props.navigation;
    return (
      <View style={container}>
        <TouchableOpacity onPress={() => push("Receipt", { crop, price, id })}>
          <Card>
            <View style={summaryContainer}>
              <View style={leftContainer}>
                <Image
                  source={toggleImage(crop)}
                  style={imageStyle}
                  accessibilityLabel="Groundnuts"
                />
              </View>

              <View>
                <View style={leftContainer}>
                  <Text
                    style={[
                      rightItems,
                      { ...fonts.bold, fontSize: fonts.tertiary.fontSize }
                    ]}
                  >
                    {crop}
                  </Text>
                  <Text
                    style={[
                      rightItems,
                      { ...fonts.bold, fontSize: fonts.tertiary.fontSize }
                    ]}
                  >
                    Lorem ipsum Donor item
                  </Text>
                  <Text
                    style={[
                      rightItems,
                      { ...fonts.bold, fontSize: fonts.tertiary.fontSize }
                    ]}
                  >
                    <Text style={{ ...fonts.tertiary }}>GHS&nbsp;</Text>
                    {price.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  imageStyle: {
    borderRadius: 100 / 2,
    alignSelf: "center",
    width: 100,
    height: 100
  },
  itemStyle: {
    alignItems: "center",
    marginTop: 30
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  leftContainer: {
    flexDirection: "column",
    alignContent: "space-between"
  },
  rightItems: {
    marginBottom: 20
  }
});

export default withNavigation(Products);
