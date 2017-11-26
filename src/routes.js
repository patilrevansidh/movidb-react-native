import {StackNavigator, TabNavigator} from 'react-navigation';
import Home from './modules/home';
import List from './modules/movie/list';
import MovieDetail from './modules/movie/detail';

export const Root = StackNavigator({
    Home : {screen:Home,navigationOptions:{header:null}},
    MovieList :{screen:List,navigationOptions:{title:'Movies'}},
    MovieDetail : {screen:MovieDetail}

});