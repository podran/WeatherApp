import React, { Component } from 'react';
import { Form, FormControl, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
export class Main extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={6} xl={4}>
                        <Form className="my-5">
                            <FormControl type="text" placeholder="Search Location" onSubmit={() => { }} />
                        </Form>
                    </Col>
                </Row>
                
            </Container>
                )
            }
        }
        
        export default Main
