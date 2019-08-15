import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { Router, Route } from "react-router-dom";
import Fav from './components/Fav';
import history from './components/history';
import { getFiveDayForecast, getForecast } from './getMethods';
import { useSelector, useDispatch } from 'react-redux';
import {  oneDayForecast, fiveDayForecast } from './actions';

export default function App() {
  const dispatch = useDispatch();
  const selectedCity = useSelector(state => state.result.selectedResult);
  
  getForecast(selectedCity.Key)
  .then(oneDay => {
    dispatch(oneDayForecast(oneDay.data));
  })
  .catch(err => console.log(err));

getFiveDayForecast(selectedCity.Key)
  .then(fiveDay => {
    dispatch(fiveDayForecast(fiveDay.data));
  })
  .catch(err => console.log(err));

  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/fav" component={Fav} />
      </div>
    </Router>
  );
}