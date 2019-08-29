import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import { createStackNavigator } from "react-navigation";
import ProductScreen from "components/Products";

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
          <ProductScreen crop={crop.name} price={crop.price} key={crop._id} />
        ))}
      </ScrollView>
    );
  }
}

const ProductStack = createStackNavigator({
  Home: {
    screen: Products,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Products",
        headerBackTitle: null
      };
    }
  }
});

export default ProductStack;
