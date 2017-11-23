import React, { Component } from 'react';
import {Container, Content} from 'native-base';
import CardScreen from './screen';
import Toast from 'react-native-simple-toast';
import { connect } from "react-redux";
import {Spinner} from '../../../common/components';
import MoviList from '../list/list';


class CardContainer extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <MoviList onDetailPress={this.handleDetailPress.bind(this)}/>
                </Content>
            </Container>
        );
    }

    handleDetailPress(id) {
        this.props.navigation.navigate('MovieDetail',{movieId:id});
    }
    
}



export default CardContainer;