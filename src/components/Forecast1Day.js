import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import { Col, Row } from 'react-bootstrap';
 import { useSelector } from 'react-redux';



const methods = {
    componentDidMount(props) {
    }
};

function Forecast1Day(props) {
    let oneDayForecast = useSelector(state => state.search.oneDayForecast);
    let text = oneDayForecast.Headline.Text;
    return (
            <Col>
                <div>
                    {text}
                </div>
            </Col>

    )
}

export default lifecycle(methods)(Forecast1Day);

