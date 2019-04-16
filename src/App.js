import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import './assets/styles/App.scss';
import 'reset-css';

import ChildComponent from "./components/ChildComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ChildComponent title="passed text" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload...
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
