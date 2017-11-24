import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Card, CardItem,Left, Right,Body, Text, Button} from 'native-base';
import {stringConstant} from '../../../../common/constants';
import moment from 'moment';
import {PrimaryText, SecondaryText} from '../../../../common/components';
import helpers from '../../../../common/helper/util';

const cardStyles = StyleSheet.create({
    leftTextStyle :{
        textAlign:'right',
        alignSelf:'center',
        flex:2.5
    },
    rightIconHolderStyle :{
        flex:1,
        alignItems:'flex-end'
    }
});

const CardScreen = (props) => {    
    return (
        <Card>     
            <Image style={{height:175}} source={{uri:`${stringConstant.IMAGE_BASE_URL_BANNER}${props.data.backdrop_path}`}}/>                  
            <CardItem>
                <OverView category={props.category} data={props.data} onDetailPress={()=>props.onDetailPress(props.data.id)}/>
            </CardItem>
        </Card>
    );
       
};

const OverView = (props)=>{   
    return(
        <Left>
            <View style={{flex:1}}>
                <TitleRating {...props}/>
                <CategoryRelease {...props}/>
            </View>
        </Left>    
    )
}

const TitleRating = (props)=>{
    return(
        <View style={{flex:1,flexDirection:'row'}}>
            <Left>
                <TouchableOpacity onPress={props.onDetailPress}>
                    <Text>{props.data.original_title}</Text>
                </TouchableOpacity>                        
            </Left>
            <Right>
                <View style={{flexDirection:'row'}}>
                    <PrimaryText style={{textAlign:'right',alignSelf:'center',flex:2.5}}>{props.data.vote_average}</PrimaryText>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Ionicons color={stringConstant.PRIMARY_FONT_COLOR} name="ios-star" size={30}/>
                    </View>
                </View>
            </Right>
        </View>
    )
}

const CategoryRelease =(props)=> {
    const categories = helpers.calCategory(props.data.genre_ids,props.category)
    // const a = props.data.genre_ids.map((c)=>{
    //             props.category.filter((ct)=>{
    //                 const name=  c == ct.id ? ct.name :''
    //                 if(name) {
    //                     categories = `${categories}${name},`
    //                 }
    //                 return name
    //             }).filter(d=>d)
    //     });                 
    
    return (
        <View style={{flex:1,flexDirection:'row'}}>
            <Left>
                <SecondaryText  numberOfLines={1} ellipsizeMode="tail">
                    {categories}
                </SecondaryText>                           
            </Left>
            <Right >
                <View style={{flexDirection:'row'}}>
                    <SecondaryText style={{textAlign:'right',alignSelf:'center',flex:2.5}}>
                        {moment(props.data.release_date).format("YYYY")}
                    </SecondaryText>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Ionicons color={stringConstant.SECONDARY_FONT_COLOR} name="md-calendar" size={30}/>
                    </View>
                </View>
            </Right>    
        </View>
    )
}
export default CardScreen;