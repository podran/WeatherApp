import React, { Component } from 'react';
import { Form, FormControl, Row, Col } from 'react-bootstrap';
import AsyncSelect  from 'react-select/async';
import Results from './Results';
const axios = require('axios');
const fs = require('fs');



let value='';
let data =  [
    {
        value: 'john',
        label: 'John Doe',
    },
    {
        label: 'jane',
        value: 'Jane Doe',
    },
    {
        label: 'mary',
        value: 'Mary Phillips',
    },
    {
        label: 'robert',
        value: 'Robert',
    },
    {
        label: 'karius',
        value: 'Karius',
    },
  ]
function changeHandler(e) {
    // e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z]/ig, '');
    console.log(e);
}

function submitHandler(e) {
    console.log(e);
}

const API='be9SnLSTir8OGl4fmPVSfli1KakCeeUq';
let displayMenu=false;

// const filterColors = (inputValue: string) => {
//     return colourOptions.filter(i =>
//       i.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//   };

const filterResults = (results) => {
    console.log(results);
    let newResults;
     if (results) {
         newResults = results.map(result => result.label= `${result.Country.ID} ${result.LocalizedName}`)
     }
     console.log(newResults);
        
}

const promiseOptions = (inputValue, cb) => {
    axios({
        method: 'get',
        url: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete',
        params: {
            apikey : API,
            q: inputValue
        }
      })
      .then((results) => {
        cb(filterResults(results.data));
      });
}


export default function Search() {
        const [, updateState] = React.useState();
        const forceUpdate = React.useCallback(() => updateState({}), []);
        return (
            <div>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={6} xl={4} className="mb-5 myCol">
                        <div>
                            {/* <Form className="searchBar mt-5">
                                <FormControl type="text" onFocus={() => {
                                    displayMenu = true;
                                    forceUpdate();
                                }}
                                onBlur={() => {
                                    displayMenu = false;
                                    forceUpdate();
                                }} 
                                placeholder="Search Location" onChange={changeHandler} onSubmit={submitHandler} />
                            </Form>
                            <Results display={displayMenu} /> */}
                            <AsyncSelect loadOptions={promiseOptions} onInputChange={changeHandler}/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
}
