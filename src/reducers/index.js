import favReducer from './fav';
import pathReducer from './path'
import searchReducer from './search'

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    favorites: favReducer,
    path: pathReducer,
    search: searchReducer
});

export default allReducers;