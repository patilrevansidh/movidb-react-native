import React from 'react';
import {Spinner as NativebaseSpinner, View, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const spinnerStyle = {
    container : {
        flex : 1,
        backgroundColor:'#FFF',
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
    const message = props.message ? props.message : 'Loading...'
    return (
        <View style={spinnerStyle.container}>
            <View style={spinnerStyle.spinnerMessageHolder}>
                <NativebaseSpinner />
                <Text style={spinnerStyle.messageHolder}>
                    {message}
                </Text>
            </View>
        </View>
    );
};

export default Spinner;