import { Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import React, { Component } from 'react'


let days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];

class Forecast5Days extends Component {
    constructor(props) {
        super(props);
        this.state = {
            degSign : `\xB0F`
        }
    }
    render() {
        return (
            <Col className="d-flex justify-content-sm-around col-12" id="forecast5day">
                {this.props.DailyForecasts ? this.props.DailyForecasts.map((forecast, i) => {
                    return (
                        <div className="text-center small" key={i}>
                            <h3 className="text-size-1">{days[new Date(forecast.Date).getDay()]}</h3>
                            <div className="forecast-image">
                                <Image data-tip data-for={`${i}`} src={require(`../icons/${forecast.Day.Icon}.png`)} className="mw-100" />
                                <ReactTooltip id={`${i}`} type="light">
                                    <span>
                                        {forecast.Temperature.Minimum.Value}{this.state.degSign} -
                                        {forecast.Temperature.Maximum.Value}{this.state.degSign}
                                    </span>
                                </ReactTooltip>
                            </div>
                        </div>
                    )
                })
            : null}
            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        DailyForecasts: state.search.fiveDayForecast.DailyForecasts
    }
}

export default connect(mapStateToProps)(Forecast5Days);