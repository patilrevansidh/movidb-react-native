import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {stringConstant} from '../constants';

const textStyle = StyleSheet.create({
    textFormat : {
        color: `${stringConstant.APP_FONT_COLOR}`
    }
});

const WrapperText = (props) => {
    return (
        <Text  {...props} style={[textStyle.textFormat,{...props.style}]}>
            {props.children}
        </Text>
    );
};

export default WrapperText;