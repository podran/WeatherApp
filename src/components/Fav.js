import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { selectedResult } from '../actions';
import ReactTooltip from 'react-tooltip';
import { getForecast } from '../getMethods';

class Fav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            degSign: `\xB0C`,
            favorites: []
        }
    }
    componentDidMount() {
        this.props.favorites.forEach((fav) => {
            getForecast(fav.Key)
            .then(oneDay => {
                fav.currentWeather = oneDay.data[0];
                this.setState({
                    favorites: [...this.state.favorites, fav]
                })
            })
            .catch(err => console.log(err));
        })
    }
    render() {
        return (
            <Container>
                <Row className="d-flex justify-content-around mt-5">
                    {
                        this.state.favorites.map((item, i) => {
                            return (
                                <Col key={i} xs={2}>
                                    <Card className="text-center">
                                        <Card.Title>{item.Country.LocalizedName} {item.LocalizedName}</Card.Title>
                                        <Link to="/" data-id={item.Key} onClick={(e) => {
                                            console.log(this.state.favorites[i]);
                                            this.props.selectedResult(this.props.favorites[i]);
                                        }}>
                                            <Card.Img data-tip data-for={`${i}`} src={require(`../icons/${item.currentWeather.WeatherIcon}.png`)} />
                                            <ReactTooltip id={`${i}`} type="light">
                                                {item.currentWeather.Temperature.Metric.Value} {this.state.degSign}
                                            </ReactTooltip>
                                        </Link>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
    }
}

const mapDispatchToProps = {
    selectedResult
}

export default connect(mapStateToProps, mapDispatchToProps)(Fav);