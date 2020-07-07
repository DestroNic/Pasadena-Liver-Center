import React, { Component } from 'react';
import Navbar from './components/navbar';
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './app.scss';


import Home from './pages/home';
import About from './pages/about';
import Services from "./pages/services";
import AboutVisit from "./pages/about-visit";
import Contact from "./pages/contact";
import Footer from "./components/footer";


export default class App extends Component{
  render(){
    return(
      <Router>
      
        
        
          <Navbar />
          <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services} />
            <Route path="/about-visit" component={AboutVisit} />
            <Route path="/contact" component={Contact} />
          </Switch>
          </AnimatePresence>
        
        
        
      <Footer />
      </Router>
    )
  }

}
