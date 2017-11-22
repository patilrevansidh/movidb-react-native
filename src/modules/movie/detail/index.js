import React, { Component } from 'react';
import {View, Image} from 'react-native';
import {Container, Content, Text} from 'native-base';

class Detail extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={{flex:1}}>
                        <Image style={{height:200}} source={require('../../../common/assets/images/inception_movie_poster_banner_01.jpg')}/>
                        <View style={{position:'relative',margin:10, marginTop:-75}}>
                            <Image style={{width:100,height:150}} source={require('../../../common/assets/images/inception_movie_poster_banner_01.jpg')}/>                            
                        </View>
                        <View style={{position:'absolute',marginTop:225,marginLeft:150,flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold',fontSize:20}}> Boomer</Text>
                            <Text note style={{fontWeight:'bold',fontSize:20}}> (2017)</Text>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Detail;