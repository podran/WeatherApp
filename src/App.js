import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fav from './components/Fav';
import {Navbar, Nav} from 'react-bootstrap';


export default class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar bg="light" variant="light">
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Main</Link></Nav.Link>
              <Nav.Link><Link to="/fav">Favourites</Link></Nav.Link>
            </Nav>
          </Navbar>
          <Route exact path="/" component={Main} />
          <Route path="/fav" component={Fav} />
        </div>
      </Router>
    );
  }
}