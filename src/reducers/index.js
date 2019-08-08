import favReducer from './fav';
import pathReducer from './path'

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    favorites: favReducer,
    path: pathReducer
});

export default allReducers;