import React from 'react';
import {Container, Content,View, Text, Card, Footer, FooterTab, Button} from 'native-base';
import {Image} from 'react-native';
import IoniIcons from 'react-native-vector-icons/Ionicons';
import {stringConstant} from '../../../common/constants';

const DetailScreen = (props) => {
       const url = stringConstant.IMAGE_BASE_URL_BANNER.concat(props.data.poster_path);
       console.log("boomer",url);
       return (                         
        <Content>
                <Card style={{flex:1}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <Image             
                                style={{height:stringConstant.SCREEN_HEIGHT/2,flex:1,alignSelf:'center'}}                   
                                source={{uri:url}}/>  
                        <View style={{flex:1}}>
                        </View>   
                </View>

                </Card>       
        </Content>
                
        // <Image             
        // style={{height:stringConstant.SCREEN_HEIGHT-50}}                   
        // source={{uri:url}}/>                     
        ) 
};

export default DetailScreen;