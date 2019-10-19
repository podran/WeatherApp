import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import { selectedResult, oneDayForecast, fiveDayForecast } from '../actions';
import { connect } from 'react-redux';
import { getFiveDayForecast, getForecast, promiseOptions } from '../getMethods';

export class Search extends Component {

    searchChangeHandler(result) {
        this.props.selectedResult(result);
        getForecast(result.Key)
            .then(oneDay => {
                this.props.oneDayForecast(oneDay.data);
            })
            .catch(err => console.log(err));

        getFiveDayForecast(result.Key)
            .then(fiveDay => {
                this.props.fiveDayForecast(fiveDay.data);
            })
            .catch(err => console.log(err));
    }
    
    render() {
        return (
                <Row className="d-flex justify-content-center w-100">
                    <Col xs={12} md={6} xl={4} className="my-5">
                        <div>
                            <AsyncSelect loadOptions={promiseOptions} onChange={this.searchChangeHandler.bind(this)} />
                        </div>
                    </Col>
                </Row>
        )
    }
}

const mapDispatchToProps = {
    selectedResult,
    oneDayForecast,
    fiveDayForecast
}

export default connect(null, mapDispatchToProps)(Search);