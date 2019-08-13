import React, { useState } from 'react';
import { Col, Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';

//create your forceUpdate hook
function useForceUpdate(){
    const [value, set] = useState(true); //boolean state
    return () => set(!value); // toggle the state to force render
}

let temp;
let degSign;

function Forecast1Day(props) {
    const forceUpdate = useForceUpdate();

    let state = useSelector(state => {
        return {
            oneDayForecast: state.search.oneDayForecast,
            selectedCity: state.result.selectedResult
        }
    });

    let forecast = {
        forcastText: state.oneDayForecast[0].WeatherText,
        forcastIcon: state.oneDayForecast[0].WeatherIcon,
        celcTemp: state.oneDayForecast[0].Temperature.Metric.Value,
        ferTemp: state.oneDayForecast[0].Temperature.Imperial.Value,
    }

    return (
        <Col className="d-flex justify-content-center mb-5">
            <div className="mw-75 text-info text-center">
                    <h3>{forecast.forcastText}</h3>
                    <h4>{temp === forecast.ferTemp ? temp = forecast.celcTemp : temp = forecast.ferTemp} {degSign === `\xB0F` ? degSign = `\xB0C` : degSign = `\xB0F`}</h4>
                <Button size="sm" variant="outline-info" onClick={forceUpdate}>Units</Button>
                <img
                    className="d-block w-100"
                    src={require(`../icons/${forecast.forcastIcon}.png`)}
                    alt="Current Forecast"
                />
            </div>
        </Col>

    )
}

export default Forecast1Day;

