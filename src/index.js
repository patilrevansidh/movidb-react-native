import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from './store';
import {Root} from './routes';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {BackHandler} from 'react-native';

const store = configureStore();

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
        <Root
            navigation={addNavigationHelpers({ dispatch, state: nav })}
        />
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

export default MoviDb;