import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from './store';
import {Root} from './routes';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {BackHandler} from 'react-native';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';
import codePush from "react-native-code-push";

const store = configureStore();

const addListener = createReduxBoundAddListener("root");
  
class App extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
      const { dispatch, nav } = this.props;
      if (nav.index === 0) {
        return false;
      }
      dispatch(NavigationActions.back());
      return true;
    };
    
    render() {
      const { dispatch, nav } = this.props;        
      return (
        <Root navigation={addNavigationHelpers({
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
  
const MoviDb = () => (
    <Provider store={store}>
        <AppWithNavigationState/>
    </Provider>
);


const MyApp = codePush(MoviDb);

export default MyApp;