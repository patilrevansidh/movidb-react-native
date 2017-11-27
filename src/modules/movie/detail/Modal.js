import React, { Component } from 'react';
import {View,Modal,TouchableOpacity,Text} from 'react-native';

class ImageModal extends Component {
    render() {
        return (
            <View style={{marginTop: 22,justifyCenter:'center',alignItems:'center'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{flex:1,justifyCenter:'center',alignItems:'center'}}>
          <View style={
            {flex:1,justifyContent:'center'}}>
            <Text style={{textAlign:'center'}}>Hello World!</Text>
          </View>
         </View>
        </Modal>
        </View>
        );
    }
}

export default ImageModal;