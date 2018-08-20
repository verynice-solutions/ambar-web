import React, { Component } from 'react';
import logo from './logo.svg';
import Landing from './components/landing/landing'
import './App.css';
import {Provider} from 'mobx-react'
import RootStore from './stores'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Provider rootStore={new RootStore()}><Landing/></Provider>
      </div>
    );
  }
}

export default App;
