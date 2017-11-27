import React, { Component } from 'react';
import {View, Image} from 'react-native';
import detailService from './service';
import DetailScreen from './screen';
import {Spinner} from '../../../common/components';
import {fetchMovieDetail} from './action';
import { connect } from "react-redux";

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
                        onFooterPress={this.handleFooterPress.bind(this)}
                        showModal={this.state.showModal}
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
        console.log("item",item,"id",id);
    }
}

const mapDispatchToProps = (dispatch) =>({
    fetchMovieDetail : (id)=>{
        dispatch(fetchMovieDetail(id));
    }
});
const mapStateToProps = (state) =>({
    movieDetail : state.movieDetail
});
export default connect(mapStateToProps,mapDispatchToProps)(Detail);