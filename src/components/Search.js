import React, { Component } from 'react';
import { Form, FormControl, Row, Col } from 'react-bootstrap';
import Select  from 'react-select';
import SelectSearch from 'react-select-search';
import Results from './Results';


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
    e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z]/ig, '');
}

function submitHandler(e) {
    console.log(e);
}



export default function Search() {
        return (
            <div>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={6} xl={4} className="mb-5 myCol">
                        <Form className="searchBar mt-5">
                            <FormControl type="text" placeholder="Search Location" onChange={changeHandler} onSubmit={submitHandler} />
                        </Form>
                        <Results />
                    </Col>
                </Row>
            </div>
        );
}
