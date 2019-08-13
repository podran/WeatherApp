import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AsyncSelect  from 'react-select/async';
import { selectedResult, oneDayForecast, fiveDayForecast } from '../actions';
import { useDispatch } from 'react-redux';
const axios = require('axios');
const API='be9SnLSTir8OGl4fmPVSfli1KakCeeUq';

const filterResults = (results) => {
    let newResults;
     if (results) {
         newResults = results.map(result => {
             return {
                 ...result,
                 label: `${result.Country.ID} - ${result.LocalizedName}`,
                 value: `${result.Country.ID} - ${result.LocalizedName}`
             }
         });
         return newResults;
     }
}

const promiseOptions = (inputValue, cb) => {
    axios({
        method: 'get',
        url: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete',
        params: {
            apikey : API,
            q: inputValue.replace(/[^A-Za-z]/ig, '')
        }
      })
      .then((results) => {
        cb(filterResults(results.data));
      })
      .catch(err => console.log(err));
}

const getForecast = (key) => {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/currentconditions/v1/${key}`,
        params: {
            apikey : API
        }
      });
}

const getFiveDayForecast = (key) => {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}`,
        params: {
            apikey : API
        }
      });
}

export default function Search() {
        // const [, updateState] = React.useState();
        // const forceUpdate = React.useCallback(() => updateState({}), []);
        const dispatch = useDispatch();
        return (
            <div>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={6} xl={4} className="my-5">
                        <div>
                            <AsyncSelect loadOptions={promiseOptions} onChange={(result) => {
                                dispatch(selectedResult(result));

                                getForecast(result.Key)
                                .then(oneDay => {
                                    if(oneDay) dispatch(oneDayForecast(oneDay.data));
                                })
                                .catch(err => console.log(err));
                                
                                getFiveDayForecast(result.Key)
                                .then(fiveDay => {
                                    if(fiveDay) dispatch(fiveDayForecast(fiveDay.data));
                                })
                                .catch(err => console.log(err));
                            }}/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
}
