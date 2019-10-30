import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Fav from './components/Fav';
import { getFiveDayForecast, getForecast } from './getMethods';
import { connect } from 'react-redux';
import { oneDayForecast, fiveDayForecast } from './actions';
import React, { Component } from 'react'

class App extends Component {

  componentWillMount() {
    getForecast(215854)
      .then(oneDay => {
       this.props.oneDayForecast(oneDay.data);
      })
      .catch(err => console.log(err));

    getFiveDayForecast(215854)
      .then(fiveDay => {
       this.props.fiveDayForecast(fiveDay.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Main} />
            <Route path="/fav" component={Fav} />
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    defaultCity: state.selectedResult
  }
}
const mapDispatchToProps = {
  oneDayForecast,
  fiveDayForecast
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
