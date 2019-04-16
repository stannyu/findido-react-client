import React, { Component, Fragment } from 'react';
import 'reset-css';
import './assets/styles/App.scss';

import HeaderComponent from "./components/header/HeaderComponent";
import ContentMainComponent from "./components/content/ContentMainComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderComponent />
        <ContentMainComponent />
      </Fragment>
    );
  }
}

export default App;
