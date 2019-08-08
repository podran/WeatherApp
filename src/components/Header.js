import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";
 
export class Header extends Component {
    render() {
        return (
            <ul>
                   <li><Link to="/">herolo weather task</Link></li>
            </ul>
        )
    }
}

export default Header
