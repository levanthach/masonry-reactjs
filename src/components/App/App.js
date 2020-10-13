import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import RouterURL from '../RouterURL/RouterURL';
import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
            <Header></Header>
            <RouterURL></RouterURL>
            <Footer></Footer>
        </div>
      </Router>
    );
  }
}
export default App;
