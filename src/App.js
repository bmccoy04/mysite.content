import React, { Component } from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import SideNav from './Containers/SideNav';
import MainContent from './Containers/MainContent';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className="app-main-container">
        <SideNav></SideNav>
        <MainContent></MainContent>
      </div>
    );
  }
}

export default App;
