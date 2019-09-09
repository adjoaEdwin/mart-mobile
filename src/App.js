import React, { Component, Fragment } from "react";
import MainAppContainer from "./navigation/RootNavigator";
import ThemeContext from "./context/ThemeContext";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeContext.Provider value="#F4F4F4">
        <Fragment>
          <MainAppContainer />
        </Fragment>
      </ThemeContext.Provider>
    );
  }
}

export default App;
