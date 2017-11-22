import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {stringConstant} from '../constants';

const playBtnStyle =StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
        borderWidth:2,
        marginRight:100,
        marginLeft:100,
        borderRadius:10
    },
    iconHolder : {
        flex : 1,
        alignItems : 'flex-end',
        justifyContent : 'center',
        marginRight : 10,
    },
    btnTextStyle:{
        color : stringConstant.APP_FONT_COLOR,
        alignItems : 'flex-start',
        fontSize:25,
        fontWeight:'bold'
    }
    
});

const PlayButton = (props) => {
    return (
        <View style={{flex:1,backgroundColor:stringConstant.APP_BLACKGROUND_COLOR}}>
            <TouchableOpacity style={playBtnStyle.container} {...props}>
                <View style={playBtnStyle.iconHolder}>
                    <Icon size={50} color={stringConstant.APP_FONT_COLOR} name="play-circle-o"/>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={playBtnStyle.btnTextStyle}>
                        Play
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default PlayButton;