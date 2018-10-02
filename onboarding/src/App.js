import React, { Component } from 'react';
// import logo from './logo.svg';
import ollie from './ollie.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ollie} className="App-logo" alt="logo" />
          <p className="App-intro">
            50% OFF your meal plan will be applied at checkout
          </p>
        </header>
      </div>
    );
  }
}

export default App;





// <h1 className="App-title">Ollie</h1>
// <p className="App-intro">
//  To get started, edit <code>src/App.js</code> and save to reload.
// </p>