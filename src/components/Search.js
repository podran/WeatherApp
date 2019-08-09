import React, { Component } from 'react';
import { Form, FormControl, Row, Col } from 'react-bootstrap';;

export default class Search extends Component {
    changeHandler(e) {
        e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z]/ig, '');
    }
    render() {
        return (
            <div>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={6} xl={4}>
                        <Form className="my-5">
                            <FormControl type="text" placeholder="Search Location" onChange={this.changeHandler} pattern='[A-Za-z]' />
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
