import React from 'react';
import {Spinner as NativebaseSpinner, View, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {PrimaryText} from './'
import { stringConstant } from '../constants/index';

const spinnerStyle = {
    container : {
        flex : 1,
        justifyContent : 'center',
        alignContent : 'center'
    },
    messageHolder : {
        // color : stringConstants.APP_COLOR,
        textAlign : 'center',
    },
    spinnerMessageHolder : {
        alignContent : 'center'
    }
}

const Spinner = (props) => {
    const message = props.message ? `${props.message}` : 'Loading...'
    return (
        <View style={spinnerStyle.container}>
            <View style={spinnerStyle.spinnerMessageHolder}>
                <NativebaseSpinner />
                <PrimaryText style={{color:stringConstant.PRIMARY_FONT_COLOR,textAlign:'center'}}>
                    {message}
                </PrimaryText>
            </View>
        </View>
    );
};

export default Spinner;