import React, { Component } from 'react'
import Forecast1Day from './Forecast1Day';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'


export default function Forecast5Days(props) {
    const fiveDayForecast = useSelector(state => state.fiveDayForecast);
    return (
        <Row>
            <Col>
                <div>
                    text
                </div>
            </Col>
            <Col>
                <div>
                    text
                </div>
            </Col>
            <Col>
                <div>
                    text
                </div>
            </Col>
            <Col>
                <div>
                    text
                </div>
            </Col>
            <Col>
                <div>
                    text
                </div>
            </Col>
        </Row>
    )
}
