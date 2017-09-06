import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Calculator from "./calc.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Number Cruncher</h2>
        </div>
        <p className="App-intro">
          Get Ready To Crunch Some Numbers !*&^$*&
        </p>
        <Calculator />
      </div>
    );
  }
}

export default App;
