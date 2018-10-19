import React, { Component } from 'react';
import './App.css';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet"/>
        </header>
        <Home />
      </div> 
    );
  }
}

export default App;
