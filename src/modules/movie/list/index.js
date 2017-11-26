import React, { Component } from 'react';
import {Container, Content} from 'native-base';
import { connect } from "react-redux";
import {Spinner} from '../../../common/components';
import MoviList from '../list/list';
import {fetchMovieList} from './action';


class CardContainer extends Component {
    componentDidMount() {
        this.fetchList()   
    }

    async fetchList() {
        this.props.fetchMovieList();
    }
   
    render() {
        if(this.props.list.showLoader) {
            return <Spinner/>
        }
        return (           
            <MoviList 
                catergories={this.props.list.catergories}
                data={this.props.list.list}
                onDetailPress={this.handleDetailPress.bind(this)}/>              
        );
    }

    handleDetailPress(id,movieTitle) {
        this.props.navigation.navigate('MovieDetail',{movieId:id,movieTitle:movieTitle});
    }
    
}

const mapStateToProps = (state) =>({
    list : state.listReducer
});

const mapDispatchToProps = (dispatch) =>({
    fetchMovieList : ()=>{
        dispatch(fetchMovieList());
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(CardContainer);