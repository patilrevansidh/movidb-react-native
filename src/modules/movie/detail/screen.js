import React from 'react';
import {Container, Content,View, Text, Card, Footer, FooterTab, Button} from 'native-base';
import {Image} from 'react-native';
import IoniIcons from 'react-native-vector-icons/Ionicons';
import {stringConstant} from '../../../common/constants';

const DetailScreen = (props) => {
       const posterPathUrl = stringConstant.IMAGE_BASE_URL_BANNER.concat(props.data.poster_path);
       const bannerPathUrl = stringConstant.IMAGE_BASE_URL_BANNER.concat(props.data.backdrop_path)
       console.log("boomer",posterPathUrl,bannerPathUrl);
       return (                         
        <Content>
            <Card style={{flex:1}}>
               <View style={{flex:1}}>
                   <View style={{flex:1}}>
                        <Image style={{height:175,flex:1}} source={{uri:bannerPathUrl}}/> 
                   </View>
                   <View style={{position:'relative',marginLeft:10,marginTop:-80,flex:1}}>                     
                        <Image             
                          style={{height:200,width:150}}                   
                          source={{uri:posterPathUrl}}/>   
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