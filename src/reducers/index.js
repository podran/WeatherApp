import favReducer from './fav';
import searchReducer from './search'
import {combineReducers} from 'redux';
import resultsReducer from './resultsReducer';

const allReducers = combineReducers({
    favorites: favReducer,
    search: searchReducer,
    result: resultsReducer,
});

export default allReducers;