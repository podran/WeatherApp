import { Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import React, { Component } from 'react'

class Forecast1Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            degSign: `\xB0C`
        }
    }
    render() {
        return (
            <Col className="bg-light d-flex justify-content-center mb-5 mt-2" xs={6}>
                {this.props.oneDayForecast.map((forcast, i) => {
                    return (
                        <div key={i} className="mw-75 text-info text-center">

                            <h3>{this.props.oneDayForecast[0].WeatherText}</h3>
                            <h4>{this.state.degSign === `\xB0C`
                                ? this.props.oneDayForecast[0].Temperature.Metric.Value
                                : this.props.oneDayForecast[0].Temperature.Imperial.Value}
                                {this.state.degSign}
                            </h4>
                            <Button className="text-size-0" size="sm" variant="outline-info" onClick={() => {
                                let degSign = this.state.degSign === `\xB0F` ? `\xB0C` : `\xB0F`;
                                this.setState({
                                    degSign
                                })
                            }}>Units</Button>
                            <img
                                className="d-block w-100"
                                src={this.props.oneDayForecast[0].WeatherIcon ? require(`../icons/${this.props.oneDayForecast[0].WeatherIcon}.png`) : require(`../icons/wait.ico`)}
                                alt="Current Forecast"
                            />
                        </div>
                    )
                })}

            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        oneDayForecast: state.search.oneDayForecast,
        selectedCity: state.result.selectedResult,
    }
}

export default connect(mapStateToProps)(Forecast1Day);
