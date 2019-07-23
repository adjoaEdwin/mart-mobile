import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import moveToBottom from "../api/moveToBottom";
import { Button, SecondaryBtn } from "components";
import { Card } from "react-native-elements";
import { colors, fonts } from "styles";

class Receipt extends Component {
  state = {};
  render() {
    const {
      imageStyle,
      itemStyle,
      itemTextStyle,
      orderNumStyle,
      summaryContainer,
      buttonContainer,
      leftContainer,
      leftItems,
      rightItems
    } = styles;

    return (
      <ScrollView>
        <Card containerStyle={{ marginRight: 20, marginLeft: 20 }}>
          <Image
            source={require("assets/images/groundnuts.jpg")}
            style={imageStyle}
          />
          <View style={itemStyle}>
            <Text style={itemTextStyle}>Millet</Text>
            <Text style={orderNumStyle}>ORD/112/C13</Text>
          </View>

          <View style={summaryContainer}>
            <View style={leftContainer}>
              <Text style={leftItems}>Quantity</Text>
              <Text style={leftItems}>Unit Price</Text>
              <Text style={leftItems}>Grand Total</Text>
            </View>

            <View>
              <View style={leftContainer}>
                <Text
                  style={[
                    rightItems,
                    { ...fonts.bold, fontSize: fonts.tertiary.fontSize }
                  ]}
                >
                  100 <Text style={{ ...fonts.tertiary }}>bags</Text>
                </Text>
                <Text
                  style={[
                    rightItems,
                    { ...fonts.bold, fontSize: fonts.tertiary.fontSize }
                  ]}
                >
                  <Text style={{ ...fonts.tertiary }}>GHC</Text> 90.00
                </Text>
                <Text
                  style={[
                    rightItems,
                    { ...fonts.bold, fontSize: fonts.tertiary.fontSize }
                  ]}
                >
                  <Text style={{ ...fonts.tertiary }}>GHC</Text> 9,000.00
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <View style={buttonContainer}>
          <Button>Accept</Button>
          <SecondaryBtn>Decline</SecondaryBtn>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    borderRadius: 200 / 2,
    alignSelf: "center",
    width: 200,
    height: 200
  },
  itemStyle: {
    alignItems: "center",
    marginTop: 30
  },
  itemTextStyle: {
    ...fonts.bold
  },
  orderNumStyle: {
    ...fonts.tertiary
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30
  },
  buttonContainer: {
    marginTop: 20
  },
  leftContainer: {
    flexDirection: "column",
    alignContent: "space-between"
  },
  leftItems: {
    marginBottom: 20,
    textAlign: "right"
  },
  rightItems: {
    marginBottom: 20
  }
});

export { Receipt };
