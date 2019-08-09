import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class Forecast extends Component {
    render() {
        return (
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={6}>
                    <Row>
                        <Col>weather header</Col>
                    </Row>
                    <Row>
                        <Col>current weather</Col>
                    </Row>
                    <Row>
                        <Col>5 - day weather</Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Forecast
