import React, { Component } from 'react';
import {Container, Content} from 'native-base';
import CardScreen from './screen';

class CardContainer extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CardScreen
                        onDetailPress={this.handleDetailPress.bind(this)}
                    />
                </Content>
            </Container>
        );
    }
    handleDetailPress() {
        this.props.navigation.navigate('Detail');
    }
}

export default CardContainer;