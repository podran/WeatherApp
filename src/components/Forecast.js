import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../actions';
import Forecast1Day from './Forecast1Day';
import Forecast5Days from './Forecast5Days';
import React, { Component } from 'react'


class Forecast extends Component {
    isFavorite(city) {
        return this.props.favorites.includes(this.props.selectedCity);
    }


    favoriteClickHandler() {
        const data = this.props.selectedCity;

        if (this.isFavorite(this.props.selectedCity)) {
            this.props.removeFav(data);
        }
        else {
            this.props.addFav(data);
        }
    }
    render() {
        return (
            <div>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={6}>
                        {/* header */}
                        <Row className="d-flex justify-content-between">
                            <Col>
                                <h4>{this.props.selectedCity.Country.LocalizedName} - {this.props.selectedCity.LocalizedName}</h4>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Button variant="outline-secondary" className="text-size-0" onClick={this.favoriteClickHandler.bind(this)}> { this.isFavorite() ? 'Remove' : 'Add' }</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* today forecast */}
                <Row className="d-flex justify-content-center">
                    <Forecast1Day />
                </Row>

                {/* 5 days forecast */}
                <Row>
                    <Forecast5Days />
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedCity: state.result.selectedResult,
        favorites: state.favorites,
        currentWeather: state.search.oneDayForecast[0]
    }
}

const mapDistpatchToProps = {
    addFav,
    removeFav
}

export default connect(mapStateToProps, mapDistpatchToProps)(Forecast);