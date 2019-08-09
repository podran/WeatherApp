import React, { Component } from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import Search from './Search';
import Forecast from './Forecast';
export class Main extends Component {
    render() {
        return (
            // Search Field
                <Container fluid={true}>
                    <Search />
                    {/* Weather Cast */}
                    <Forecast />
                </Container>
                )
            }
        }
        
        export default Main
