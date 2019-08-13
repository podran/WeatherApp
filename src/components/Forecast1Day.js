import React, { useState } from 'react';
import { Col, Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';

//create your forceUpdate hook
function useForceUpdate(){
    const [value, set] = useState(true); //boolean state
    return () => set(!value); // toggle the state to force render
}

let degSign;
let temp;

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
        ferTemp:  state.oneDayForecast[0].Temperature.Imperial.Value
    }

    let img =  forecast.forcastIcon ? require(`../icons/${forecast.forcastIcon}.png`) : require(`../icons/wait.ico`);

    temp = temp === forecast.ferTemp ? forecast.celcTemp : forecast.ferTemp;
    degSign = degSign === `\xB0F` ?  `\xB0C` : `\xB0F`;
   

    return (
        <Col className="bg-light d-flex justify-content-center mb-5 mt-2" xs={6}>
            <div className="mw-75 text-info text-center">
                    <h3>{forecast.forcastText}</h3>
                    <h4>{temp} {degSign}</h4>
                <Button className="text-size-0" size="sm" variant="outline-info" onClick={() => {
                    forceUpdate();
                }}>Units</Button>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="Current Forecast"
                />
            </div>
        </Col>

    )
}

export default Forecast1Day;

