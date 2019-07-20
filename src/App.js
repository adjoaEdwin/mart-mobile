import React, { Component, Fragment } from "react";
import firebase from "firebase/app";
import MainAppContainer from "./navigation/RootNavigator";
import { firebaseConfig } from "./api/constants";

class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   firebase.initializeApp(firebaseConfig);
  // }

  render() {
    return (
      <Fragment>
        <MainAppContainer />
      </Fragment>
    );
  }
}

export default App;
