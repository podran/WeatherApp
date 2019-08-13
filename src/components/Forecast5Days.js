import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux'

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];

export default function Forecast5Days(props) {
    const forecast = useSelector(state => {
        return {
            days: state.search.fiveDayForecast.DailyForecasts
        }
    });
    return (
        <Col className="d-flex justify-content-center">
            {forecast.days.map((forecast) => {
                return (
                    <div className="text-center small mw-25">
                        <h3>{days[new Date(forecast.Date).getDay()]}</h3>
                        <Image src={require(`../icons/${forecast.Day.Icon}.png`)} />
                    </div>
                       
                )
            })}
        </Col>
    )
}
