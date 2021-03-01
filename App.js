import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs'

// You can import from local files
import TransactionScreen from './Screens/BookTransaction'
import SearchScreen from './Screens/BookTransaction'

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        
       
        <Appcontainer/>
      </View>
    )
  }
}

var TabContainer = createBottomTabNavigator({
  Trasaction:{ screen : TransactionScreen},
  Search:{screen:SearchScreen},
})
const Appcontainer = createAppContainer(TabContainer)