import React, { Component } from 'react';
import logo from './logo.svg';
import Landing from './components/landing/landing'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
      </div>
    );
  }
}

export default App;
