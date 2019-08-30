import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import { ListItem } from "react-native-elements";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { toggleImage } from "styles/images";
import { colors } from "styles";

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      id: ""
    };
  }

  componentDidMount() {
    this.getAllOrders();
  }

  getAllOrders = async () => {
    // get user info from strorage
    let token, item;

    token = await AsyncStorage.getItem("userInfo");
    item = JSON.parse(token);
    item = item.id;
    this.setState({ id: item });

    const { id } = this.state;

    try {
      await axios.get(`http://localhost:4500/api/orders/${id}`).then(result => {
        this.setState({ orders: result.data.data });
      });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { orders } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        {orders.map((order, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: toggleImage(order.crop.name) }}
            rightTitle={
              <Text>
                GHS&nbsp;<Text>{order.crop.price.toFixed(2)}</Text>
              </Text>
            }
            rightSubtitle={order.orderStatus}
            rightSubtitleStyle={{
              color: "#ECC94B",
              textTransform: "capitalize"
            }}
            title={order.crop.name}
            subtitle={
              <Text style={{ color: colors.lightGrey }}>
                {order.quantity} bags of {order.crop.name}
              </Text>
            }
            bottomDivider
          />
        ))}
      </View>
    );
  }
}

const OrderStack = createStackNavigator({
  Home: {
    screen: Orders,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Orders",
        headerBackTitle: null
      };
    }
  }
});

export default OrderStack;
