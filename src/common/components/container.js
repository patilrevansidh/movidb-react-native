import React from 'react';
import {View, StyleSheet} from 'react-native';
import {stringConstant} from '../constants'

const containerStyle = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor: stringConstant.APP_BLACKGROUND_COLOR
    }
});

const Container = (props) => {
    return (
        <View style={[containerStyle.container,{...props.style}]}>
            {props.children}
        </View>
    );
};

export default Container;