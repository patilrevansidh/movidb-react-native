import { combineReducers } from 'redux';
import nav from './nav';
import listReducer from './modules/movie/list/reducer';

const appReducer = combineReducers({
    nav,
    listReducer
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {  
    return appReducer(state, action);
}

export default rootReducer;