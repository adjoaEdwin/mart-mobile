import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Alert } from "react-native";
import axios from "axios";
import { withNavigation } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import moveToBottom from "../api/moveToBottom";
import { Button, SecondaryBtn } from "components";
import { Card } from "react-native-elements";
import { fonts, colors } from "styles";
import { toggleImage } from "styles/images";

class Receipt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderDetails: [],
      message: "",
      isLoading: false
    };
  }

  componentDidMount() {
    this.populateOrderDetails();
  }

  populateOrderDetails = async () => {
    const { navigation } = this.props;
    const crop = navigation.getParam("crop");
    const price = navigation.getParam("price");
  };

  getOrderDetails = async () => {
    console.log("pressed");
    const { navigation } = this.props;
    let cropId, token;
    token = await AsyncStorage.getItem("userInfo");
    cropId = JSON.parse(token);
    const createdBy = cropId.id;
    const crop = navigation.getParam("id");

    this.setState({ isLoading: true, message: "" });

    try {
      const order = await axios
        .post("http://localhost:4500/api/orders", {
          crop,
          createdBy
        })
        .then(result => {
          this.setState({ isLoading: false, message: result.data.message });

          const { message } = this.state;

          if (message === "Created successfully") {
            return Alert.alert(
              "Success",
              "Your order has been placed 😊",
              [
                {
                  text: "OK",
                  onPress: () => this.props.navigation.goBack()
                }
              ],
              { cancelable: false }
            );
            //TODO: show a screen for confirmation screen
          }
          return Alert.alert("Could not place order");
        });
    } catch (e) {
      console.error(e);
    }
  };

  cancelOrder = async () => {
    return Alert.alert(
      "Cancel Order",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => this.props.navigation.goBack()
        }
      ],
      { cancelable: false }
    );
  };

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
            accessibilityLabel="Groundnuts"
          />
          <View style={itemStyle}>
            <Text style={itemTextStyle}>Groundnuts</Text>
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
                  100
                  <Text style={{ ...fonts.tertiary }}>
                    {/* {JSON.stringify(id)} */}
                    bags
                  </Text>
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
          <Button style={styles.buttonStyle} onPress={this.getOrderDetails}>
            Accept
          </Button>
          <SecondaryBtn onPress={this.cancelOrder}>Decline</SecondaryBtn>
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
    marginTop: 10
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

export default withNavigation(Receipt);
