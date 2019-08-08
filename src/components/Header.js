import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Link, Route, NavLink } from "react-router-dom";
import history from './history'


export class Header extends Component {
    render() {
        return (
                <Navbar bg="light" variant="light" className="justify-content-between">
                    <Navbar.Brand>Herolo Weather Task</Navbar.Brand>
                    <Nav variant="pills" defaultActiveKey="link-1">
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={() => history.push('/')}>HomePage</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" onClick={() => history.push('/fav')}>Favorites</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
        )
    }
}

export default Header
