import React, { Component, Fragment } from "react";
import "reset-css";
import "./assets/styles/App.scss";

import HeaderComponent from "./components/header/HeaderComponent";
import ContentMainComponent from "./components/content/ContentMainComponent";
import FooterComponent from "./components/footer/FooterMainComponent";

class App extends Component {
  componentDidMount() {
    console.log("MOUNTED IN URL: http://10.200.13.17:3000/");
  }

  render() {
    return (
      <Fragment>
        <HeaderComponent />
        <ContentMainComponent />
        <FooterComponent />
      </Fragment>
    );
  }
}

export default App;
