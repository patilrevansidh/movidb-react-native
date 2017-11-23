import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Card, CardItem,Left, Right,Body, Text, Button} from 'native-base';
import {stringConstant} from '../../../../common/constants';
import moment from 'moment';

const CardScreen = (props) => {
    
    return (
        <Card>           
            <CardItem style={{marginRight:15}}>
                <Body>
                    <TouchableOpacity onPress={()=>props.onDetailPress(props.data.id)}>
                        <Image style={{height:175}} source={{uri:'https://image.tmdb.org/t/p/w500//p2frIQykQPj3dXSYVOca60RQj9X.jpg'}}/>
                    </TouchableOpacity>                    
                </Body>
            </CardItem>
            <CardItem>
                <OverView category={props.category} data={props.data} onDetailPress={()=>props.onDetailPress(props.data.id)}/>
            </CardItem>
        </Card>
    );
       
};

const OverView = (props)=>{
    let categories = ''
    const a = props.data.genre_ids.map((c)=>{
                props.category.filter((ct)=>{
                    const name=  c == ct.id ? ct.name :''
                    if(name) {
                        categories = `${categories}${name},`
                    }
                    return name
                }).filter(d=>d)
        });                 
    
    return(
        <Left>
            <View style={{flex:1}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Left>
                        <TouchableOpacity onPress={props.onDetailPress}>
                            <Text>{props.data.original_title}</Text>
                        </TouchableOpacity>                        
                    </Left>
                    <Right>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{textAlign:'right',alignSelf:'center',flex:2.5}}>{props.data.vote_average}</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Ionicons color='#000' name="ios-star" size={30}/>
                            </View>
                        </View>
                    </Right>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Left>
                        <Text note  numberOfLines={1} ellipsizeMode="tail">
                            {categories}
                        </Text>                           
                    </Left>
                    <Right >
                        <View style={{flexDirection:'row'}}>
                            <Text note style={{textAlign:'right',alignSelf:'center',flex:2.5}}>{moment(props.data.release_date).format("YYYY")}</Text>
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