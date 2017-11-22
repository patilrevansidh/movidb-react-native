import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Card, CardItem,Left, Right,Body, Text, Button} from 'native-base';

const CardScreen = (props) => {
    console.log("bookmark color",props.bookmarkColor)
    return (
        <Card>           
            <CardItem style={{marginRight:15}}>
                <Body>
                    <TouchableOpacity onPress={props.onDetailPress}>
                        <Image style={{height:175}} source={require('../../../common/assets/images/inception_movie_poster_banner_01.jpg')}/>
                    </TouchableOpacity>                    
                </Body>
            </CardItem>
            <CardItem>
                <OverView onDetailPress={props.onDetailPress}/>
            </CardItem>
        </Card>
    );
       
};

const OverView = (props)=>{
    return(
        <Left>
            <View style={{flex:1}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Left>
                        <TouchableOpacity onPress={props.onDetailPress}>
                            <Text>Native Base</Text>
                        </TouchableOpacity>                        
                    </Left>
                    <Right>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{textAlign:'right',alignSelf:'center',flex:2.5}}>7.6</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Ionicons color='#000' name="ios-star" size={30}/>
                            </View>
                        </View>
                    </Right>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Left>
                        <Text note  numberOfLines={1} ellipsizeMode="tail">Native Base, Native Base, Native Base, Native Base</Text>                           
                    </Left>
                    <Right >
                        <View style={{flexDirection:'row'}}>
                            <Text note style={{textAlign:'right',alignSelf:'center',flex:2.5}}>2017</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Ionicons name="md-calendar" size={30}/>
                            </View>
                        </View>
                    </Right>    
                </View>
            </View>
        </Left>    
    )
}

export default CardScreen;