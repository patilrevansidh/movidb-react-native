import {Root} from './routes';

const initialState = Root.router.getStateForAction(Root.router.getActionForPathAndParams('Home'));
const NAVIGATE = 'Navigation/NAVIGATE';

const alreadyPushed = (state, action) => {
  if (state.routes.length > 1 && state.routes[state.routes.length - 1].routeName === action.routeName) {
    return true;
  }
  return false;
};

const navReducer = (state = initialState, action) => {
  if (action.type === NAVIGATE && alreadyPushed(state, action)) {
    return state;
  }
  
  const nextState = Root.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;