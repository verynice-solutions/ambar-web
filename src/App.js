import React, { Component } from 'react';
// import logo from './logo.svg';
import Routes from './components/index'
import './App.css';
import {Provider} from 'mobx-react'
import RootStore from './stores'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Provider rootStore={new RootStore()}><Routes/></Provider>
      </div>
    );
  }
}

export default App;
