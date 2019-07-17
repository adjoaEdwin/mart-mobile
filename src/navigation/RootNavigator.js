import React, { Component } from "react";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Home from "../screens/home/HomeScreen";
import Orders from "../screens/home/orders/OrderScreen";
import Profile from "../screens/home/profile/ProfileScreen";
import SignUpScreen from "../screens/authentication/SignUpScreen";
import LoginNavigator from "../screens/authentication/LoginNavigator";
import OnBoardingScreen from "../screens/onboarding/OnBoardingScreen";
import Products from "../screens/home/products/ProductsScreen";

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    Products: {
      screen: Products
    },
    Orders: {
      screen: Orders,
      navigationOptions: {
        tabBarLabel: "Orders"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile"
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];

      return {
        header: null,
        headerTitle: routeName,
        resetOnBlur: true
      };
    }
  }
);

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginNavigator,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      tabBarLabel: "Sign"
    }
  }
});

class MainAppContainer extends Component {
  render() {
    return <AppContainer />;
  }
}

export default MainAppContainer;

const MainAppNavigator = createSwitchNavigator(
  {
    OnBoarding: OnBoardingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "OnBoarding"
  }
);

const AppContainer = createAppContainer(MainAppNavigator);
