import React, { Component } from "react";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import DashboardStack from "screens/dashboard/Dashboard";
import OrderStack from "screens/orders/OrderScreen";
import SettingStack from "screens/settings/SettingScreen";
import SignUpScreen from "screens/authentication/SignUpScreen";
import LoginNavigator from "screens/authentication/LoginNavigator";
import OnBoardingScreen from "screens/onboarding/OnBoardingScreen";
import ProductStack from "screens/products/ProductsScreen";
import WelcomeScreen from "screens/onboarding/WelcomeScreen";
import Icon from "react-native-vector-icons/MaterialIcons";

const AppStack = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={20} />
        )
      }
    },
    Products: {
      screen: ProductStack,
      navigationOptions: {
        tabBarLabel: "Products",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="menu" color={tintColor} size={20} />
        )
      }
    },
    Orders: {
      screen: OrderStack,
      navigationOptions: {
        tabBarLabel: "Orders",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" color={tintColor} size={20} />
        )
      }
    },
    Settings: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="settings" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        // header: null,
        headerTitle: routeName
        // resetOnBlur: true
      };
    }
  },
  { headerMode: "screen" }
);

const AuthStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginNavigator,
    navigationOptions: {}
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
