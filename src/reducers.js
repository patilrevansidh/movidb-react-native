import { combineReducers } from 'redux';
import nav from './nav';
import listReducer from './modules/movie/list/reducer';
import {movieDetail} from './modules/movie/detail/reducer'

const appReducer = combineReducers({
    nav,
    listReducer,
    movieDetail
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {  
    return appReducer(state, action);
}

export default rootReducer;