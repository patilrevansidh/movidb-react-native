import React, { Component } from 'react';
import {FlatList, View} from 'react-native';
import {fetchMovieList} from './action';
import {connect} from 'react-redux';
import MovieCard from './common/card';
import {Spinner} from '../../../common/components';

class MoviListContainer extends Component {
    componentDidMount() {
        this.fetchList()   
    }

    async fetchList() {
        this.props.fetchMovieList();
    }

    render() {
        console.log(this.props.list,"state")
        if(this.props.list.showLoader) {
            return <Spinner/>
        }
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={this.props.list.list ? this.props.list.list : [] }
                    renderItem={({item,key}) => <MovieCard 
                                                    onDetailPress={this.handleDetailPress.bind(this)}
                                                    key={key}
                                                    category={this.props.list.catergories} 
                                                    data={item}/>}
                />
            </View>
        );
    }
    handleDetailPress(id) {
        this.props.onDetailPress(id)
    }

}

const mapDispatchToProps = (dispatch) =>({
    fetchMovieList : ()=>{
        dispatch(fetchMovieList());
    }
});

const mapStateToProps = (state) =>({
    list : state.listReducer,
});


export default  connect(mapStateToProps,mapDispatchToProps)(MoviListContainer);