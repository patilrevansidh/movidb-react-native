import { combineReducers } from 'redux';
import nav from './nav';
const appReducer = combineReducers({
    nav,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {  
    return appReducer(state, action);
}

export default rootReducer;