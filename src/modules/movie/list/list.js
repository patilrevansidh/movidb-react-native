import React, { Component } from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import MovieCard from './common/card';
import {Container, PrimaryText} from '../../../common/components';

const MoviListContainer =(props)=> {
        const list = props.data ?
                                <FlatList
                                    data={props.data}
                                    renderItem={
                                        ({item,key}) => <MovieCard 
                                                            onDetailPress={props.onDetailPress}
                                                            key={key}
                                                            category={props.catergories} 
                                                            data={item}/>
                                        }
                                    keyExtractor={(item, index) => index}
                                />
                                : <PrimaryText>No Movies Found</PrimaryText>
        return list
}



export default MoviListContainer;