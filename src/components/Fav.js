import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import {locationQuery} from '../getMethods';
import history from './history';

export default function Fav() {
    const favorites = useSelector(state => state.favorites);
    return (
        <Container>
            <Row>

            </Row>



            {
                favorites.map((item, i) => {
                    return (
                        <Col key={i} >
                            <Link to="/" data-id={item.Key} onClick={(e) => {
                                locationQuery(item.Key)
                                history.push('/');
                            }}>
                                <Card className="favorite d-flex justify-content-between">
                                    <Card.Title>{item.Country.LocalizedName} {item.LocalizedName}</Card.Title>
                                </Card>
                            </Link>
                            
                        </Col>
                    )
                })
            }




        </Container>
    )
}
