import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import reducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native';
import batch from 'redux-offline/lib/defaults/batch';
import retry from 'redux-offline/lib/defaults/retry';
import discard from 'redux-offline/lib/defaults/discard';
import {persistStore, autoRehydrate} from 'redux-persist';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';
import React from 'react';
import { connect } from 'react-redux';



const NavMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
)
const addListener = createReduxBoundAddListener("root");

const configureStore = () => {
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk, NavMiddleware),
            autoRehydrate()
        )
    );

    persistStore(store, {storage: AsyncStorage,blacklist:['nav']});
    return store;
}


export default configureStore;
   
  class App extends React.Component {
    render() {
      return (
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })} />
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    nav: state.nav
  });
  
  const AppWithNavigationState = connect(mapStateToProps)(App);
  
  class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      );
    }
  }