import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Fav from './components/Fav';
import {Navbar, Nav} from 'react-bootstrap';
import history from './components/history';



export default class App extends Component{
  render(){
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/fav" component={Fav} />
        </div>
      </Router>
    );
  }
}