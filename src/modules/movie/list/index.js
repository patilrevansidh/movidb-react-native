import React, { Component } from 'react';
import {View, Input, Text,Fab, Button, Footer, FooterTab} from 'native-base';
import { connect } from "react-redux";
import {Spinner, PrimaryText} from '../../../common/components';
import MoviList from '../list/list';
import {StyleSheet} from 'react-native';
import {fetchMovieList,searchMovieList} from './action';
import { stringConstant } from '../../../common/constants/index';
import IoniIcons from 'react-native-vector-icons/Ionicons';

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
    state={searchMovie:'',filters:''}
    componentDidMount() {
        this.fetchList()   
    }

    async fetchList() {
        this.props.fetchMovieList();
    }
   
    render() {   
        const message = this.state.searchMovie.length > 2 ? 'Searching movie...' : 'Loading movie...';
        let data=[];
        if(this.state.filters)    {
            data = this.props.list.list.map((l)=>{
                if(this.state.filters == stringConstant.FAVORITE){
                    if(this.props.list.favorites.length >0){
                        if(this.props.list.favorites.includes(l.id)) {
                            return l
                        }
                    }
                }else {
                    if(this.props.list.bookmarks.length >0) {
                        if(this.props.list.bookmarks.includes(l.id)) {
                            return l
                        }
                    }                   
                }  
            }).filter(d=>d);
            // return <MoviList 
            //             catergories={this.props.list.catergories}
            //             data={data}
            //             onDetailPress={this.handleDetailPress.bind(this)}/>
        }else if(this.state.filters) {
            <Text style={listStyle.noDataFoundStyle}>No Movies Found</Text> 
        }
        else {
            if(this.state.searchMovie.length > 2 && this.props.list.searchList) {
                data=this.props.list.searchList
            }else {
                data=this.props.list.list   
            }
        }
        let listData = !this.props.list.showLoader 
                        ?  <MoviList 
                                catergories={this.props.list.catergories}
                                data={data}
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
               <FooterComponent filters={this.state.filters} onfilterPress={this.handleFilter.bind(this)}/>          
           </View>
        );
    }
    handleFilter(filters) {
        if(this.state.filters == filters) {
            this.setState({filters:''});
        }else {
            this.setState({filters:filters});
        }
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

const FooterComponent = (props)=>{
   return(
            <Footer>
                <FooterTab style={{backgroundColor:stringConstant.APP_BLACKGROUND_COLOR}}>
                    <Button onPress={()=>props.onfilterPress(stringConstant.BOOKMARK)}>
                        <IoniIcons 
                            size={30} 
                            color={props.filters == stringConstant.BOOKMARK ? stringConstant.APP_YELLOW_COLOR :stringConstant.APP_FONT_COLOR} 
                            name="ios-bookmark"/>
                    </Button>
                    <Button  onPress={()=>props.onfilterPress(stringConstant.FAVORITE)}>
                        <IoniIcons
                             size={30} 
                             color={props.filters == stringConstant.FAVORITE ? stringConstant.APP_YELLOW_COLOR :stringConstant.APP_FONT_COLOR} 
                             name="md-heart"/>
                    </Button>
                </FooterTab>
            </Footer>
        )
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