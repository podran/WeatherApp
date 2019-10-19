import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="sm">
                <Nav>
                    <Navbar.Brand >Herolo Weather Task</Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav variant="pills" defaultActiveKey="link-1" id="responsive-navbar-nav">
                        <Nav.Item>
                           <Link to={'/'}>HomePage</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={'/fav'}>Favorites</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header
