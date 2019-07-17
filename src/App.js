import React, { Component } from "react";
import MainAppContainer from "./navigation/RootNavigator";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <MainAppContainer />
      </React.Fragment>
    );
  }
}

export default App;
