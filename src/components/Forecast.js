import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Forecast1Day from './Forecast1Day';
import Forecast5Days from './Forecast5Days';

export function Forecast() {
        const selectedCity = useSelector(state => state.result.selectedResult);
        return (
            <div>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={6}>
                        {/* header */}
                            <Row className="d-flex justify-content-between">
                                <Col>
                                    <h4>{selectedCity.Country.LocalizedName}</h4>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Button >Add To Favorites</Button>
                                </Col>
                            </Row>
                        </Col>
                </Row>

                {/* today forecast */}
                <Row>
                    <Forecast1Day />
                </Row>

                {/* 5 days forecast */}
                <Row>
                    <Forecast5Days />
                </Row>
            </div>

        )
}

export default Forecast
