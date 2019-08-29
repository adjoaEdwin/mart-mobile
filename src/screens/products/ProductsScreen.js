import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import { createStackNavigator } from "react-navigation";
import ProductScreen from "components/Products";
import Receipt from "components/Receipt";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crops: []
    };
  }

  componentDidMount() {
    this.getCrops();
  }

  getCrops = async () => {
    try {
      await axios
        .get("http://localhost:4500/api/crops")
        .then(crops => this.setState({ crops: crops.data.data }));
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    const { crops } = this.state;
    return (
      <ScrollView>
        {crops.map(crop => (
          <ProductScreen
            crop={crop.name}
            price={crop.price}
            key={crop._id}
            id={crop._id}
          />
        ))}
      </ScrollView>
    );
  }
}

const ProductStack = createStackNavigator({
  Products: {
    screen: Products,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Products",
        headerBackTitle: null
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

export default ProductStack;
