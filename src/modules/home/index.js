import React, { Component } from 'react';
import {View, StyleSheet, ToastAndroid } from 'react-native';
import Screen from './screen';

class Home extends Component {
    
    render() {
        return (
            <Screen onStartPress={this.handleStartPress.bind(this)}/>
        );
    }

    handleStartPress() {
        this.props.navigation.navigate('MovieList');
    }
}

export default Home;