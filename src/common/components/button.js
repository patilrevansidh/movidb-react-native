import React from 'react';
import {TouchableOpacity,Text, StyleSheet} from 'react-native';
import {stringConstant} from '../constants';

const appBtnStyle= StyleSheet.create({
    btnStyle :{
        backgroundColor: stringConstant.APP_BLACKGROUND_COLOR
    },
    btnLabelStyle : {
        color :stringConstant.APP_FONT_COLOR
    }
});

const Button = (props) => {
    return (
        <TouchableOpacity style={[appBtnStyle.btnStyle,{...props.style}]} {...props}>
            <Text style={appBtnStyle.btnLabelStyle}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;