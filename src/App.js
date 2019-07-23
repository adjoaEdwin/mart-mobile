import React, { Component, Fragment } from "react";
import MainAppContainer from "./navigation/RootNavigator";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <MainAppContainer />
      </Fragment>
    );
  }
}

export default App;
