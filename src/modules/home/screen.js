import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Container, PlayButton} from '../../common/components';
import {stringConstant} from '../../common/constants';

const homeStyles = StyleSheet.create({
    imageContainer : {
        flex : 8
    },
    imageStyle : {
        flex:1,
        width:stringConstant.SCREEN_WIDTH,
        height:stringConstant.SCREEN_HEIGHT-100
    },
    btnStyle : {
        flex:1
    }
});

const Screen = (props) => {
    return (
        <Container>
            <View style={homeStyles.imageContainer}>
                <Image style={homeStyles.imageStyle} source={require('../../common/assets/images/banner.jpg')}/>
            </View>
            <View style={homeStyles.btnStyle}>
                <PlayButton onPress={props.onStartPress}/>
            </View>
        </Container>
    );
};

export default Screen;