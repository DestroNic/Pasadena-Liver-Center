import React, { Component } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './app.scss';



export default class App extends Component{
  render(){
    return(
      <div className="container">
        <Router>
          <Navbar />
        </Router>
      </div>
    )
  }

}
