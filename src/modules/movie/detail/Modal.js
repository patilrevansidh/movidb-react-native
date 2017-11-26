import React, { Component } from 'react';
import {View,Modal,TouchableOpacity,Text} from 'react-native';

class ImageModal extends Component {
    state = {    modalVisible: false    }
    render() {
        return (
            <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableOpacity onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>

          </View>
         </View>
        </Modal>
        </View>
        );
    }
}

export default ImageModal;