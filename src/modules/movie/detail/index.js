import React, { Component } from 'react';
import {View, Image} from 'react-native';
import detailService from './service';
import DetailScreen from './screen';
import {Spinner} from '../../../common/components';
import {fetchMovieDetail,} from './action';
import { connect } from "react-redux";
import {stringConstant} from '../../../common/constants';
import util from '../../../common/helper/util';
import {markBookAction, markFavAction} from '../list/action';


class Detail extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params.movieTitle
      });

    state = {detail:'',crew:{},showLoader:false}
    componentDidMount() {
        this.fetchDetail();
    }
    
    fetchDetail() {
        const id = this.props.navigation.state.params.movieId;
        this.props.fetchMovieDetail(id);
    }

    render() {
        if(this.props.movieDetail.dowLoaded)  {
            return <DetailScreen 
                        isBookMarked = {this.props.list.bookmarks.includes(this.props.navigation.state.params.movieId)}
                        isFavMarked = {this.props.list.favorites.includes(this.props.navigation.state.params.movieId)}
                        onFooterPress={this.handleFooterPress.bind(this)}
                        crew={this.props.movieDetail.crew.crew}
                        data={this.props.movieDetail.movie}/>
        }
                    
        if(this.props.movieDetail.showLoader){
            return (
                <View style={{flex:1}}>
                    <Spinner/>
                </View>           
            );
        }        
        return null;
    }

    handleFooterPress(item,id) {
       switch(item) {
         case stringConstant.FAVORITE :
             let favorites = [];
                 favorites=this.props.list.favorites;
                 favorites = util.uniqueCalculator(favorites,id);
             this.props.markFavAction(favorites);
             break;
         case stringConstant.BOOKMARK :
            let bookmarks=[];
                bookmarks = this.props.list.bookmarks;
                bookmarks = util.uniqueCalculator(bookmarks,id);
            this.props.markBookAction(bookmarks);
            break;
         default :
             break;
       }
    }
}

const mapDispatchToProps = (dispatch) =>({
    fetchMovieDetail : (id)=>{
        dispatch(fetchMovieDetail(id));
    },
    markFavAction : (list)=>{
        dispatch(markFavAction(list));
    },
    markBookAction : (list)=>{
        dispatch(markBookAction(list));
    }
});
const mapStateToProps = (state) =>({
    movieDetail : state.movieDetail,
    list : state.listReducer

});
export default connect(mapStateToProps,mapDispatchToProps)(Detail);