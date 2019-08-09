import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Forecast1Day from './Forecast1Day';
import Forecast5Days from './Forecast5Days';

export function Forecast() {
        const city=useSelector(state => state.search.oneDayForcast);
        return (
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={6}>
                    {/* header */}
                    <Row className="d-flex justify-content-between">
                        <Col>
                            default City
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button >Add To Favorites</Button>
                        </Col>
                    </Row>

                    {/* today forecast */}
                    <Row>
                        <Forecast1Day />
                    </Row>


                    {/* 5 days forecast */}
                        <Forecast5Days />
                </Col>
            </Row>
        )
}

export default Forecast
