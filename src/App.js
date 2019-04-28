import React, { Component, Fragment } from 'react';
import 'reset-css';
import './assets/styles/App.scss';

import HeaderComponent from "./components/header/HeaderComponent";
import ContentMainComponent from "./components/content/ContentMainComponent";

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    console.log('MOUNTED IN URL: http://10.200.13.17:3000/');
  }
  
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
