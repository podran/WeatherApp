import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AsyncSelect  from 'react-select/async';
const axios = require('axios');


function changeHandler(e) {
    console.log(e);
}

const API='be9SnLSTir8OGl4fmPVSfli1KakCeeUq';

const filterResults = (results) => {
    console.log(results);
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
      });
}

export default function Search() {
        // const [, updateState] = React.useState();
        // const forceUpdate = React.useCallback(() => updateState({}), []);
        return (
            <div>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={6} xl={4} className="my-5">
                        <div>
                            <AsyncSelect loadOptions={promiseOptions} onChange={changeHandler}/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
}
