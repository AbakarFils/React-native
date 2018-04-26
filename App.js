import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import About from './composant/About'
import Search from './composant/Search'
import { TabNavigator } from "react-navigation"


const Tabs = TabNavigator(
  {
    Search: { screen: Search },
    About: { screen: About }
  }
)
export default class App extends React.Component {
  render() {
    return (
     <View style ={{flex: 1}}>
       <StatusBar hidden={true}/>
     </View>
    );
  }
}

