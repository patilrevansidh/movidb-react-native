import React, { Component } from 'react';
import {Container, Content, View, Input, Text} from 'native-base';
import { connect } from "react-redux";
import {Spinner, PrimaryText} from '../../../common/components';
import MoviList from '../list/list';
import {StyleSheet} from 'react-native';
import {fetchMovieList,searchMovieList} from './action';
import { stringConstant } from '../../../common/constants/index';

const listStyle = StyleSheet.create({
    textStyle : {
        textAlign:'center',
        flex:0.7,
        borderBottomColor:stringConstant.APP_BLACKGROUND_COLOR,
        backgroundColor:'#FFF',
        borderBottomWidth:2
    },
    noDataFoundStyle : {
        flex:1,
        alignContent:'center',
        textAlign:'center'
    }
});

class CardContainer extends Component {
    state={searchMovie:''}
    componentDidMount() {
        this.fetchList()   
    }

    async fetchList() {
        this.props.fetchMovieList();
    }
   
    render() {        
        const message = this.state.searchMovie.length > 2 ? 'Searching movie...' : 'Loading movie...'
        let listData = !this.props.list.showLoader 
                        ?  <MoviList 
                                catergories={this.props.list.catergories}
                                data={(this.state.searchMovie.length > 2 && this.props.list.searchList) ? this.props.list.searchList : this.props.list.list}
                                onDetailPress={this.handleDetailPress.bind(this)}/>
                        : <Spinner message={message}/>
        listData =  this.props.list.noData ? <Text style={listStyle.noDataFoundStyle}>No Movies Found</Text> :listData 
        return (             
           <View style={{flex:1}}>
                <Input 
                    value={this.state.searchMovie}
                    onChangeText={this.handleSearch.bind(this)} 
                    placeholder={stringConstant.SEARCH_PLACEHOLDER}
                    underlineColorAndroid="transparent"
                    style={listStyle.textStyle}/>
               <View style={{flex:8,justifyContent:'center'}}>
                   {listData}
               </View>
           </View>
        );
    }

    handleDetailPress(id,movieTitle) {
        this.props.navigation.navigate('MovieDetail',{movieId:id,movieTitle:movieTitle});
    }

    handleSearch(text) {
        this.setState({searchMovie:text});
        if(text.length > 2) {
            this.props.searchMovieList(text);
        }
    }   
}
const mapStateToProps = (state) =>({
    list : state.listReducer
});

const mapDispatchToProps = (dispatch) =>({
    fetchMovieList : ()=>{
        dispatch(fetchMovieList());
    },
    searchMovieList:(text)=>{
        dispatch(searchMovieList(text));
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(CardContainer);