import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import About from './composant/About'
import Search from './composant/Search'
import { TabNavigator } from "react-navigation"
//***************************
// pour avoir le Menu de Navigation en bas
// */

const Tabs = TabNavigator(
  {
    Search: { screen: Search },
    About: { screen: About }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions : {
      showIcon: true,
      showLabel: false,
      pressColor: 'white',
      indicatorStyle: {
        height :2,
        backgroundColor: "#FFF"
      },
      style: {
        backgroundColor: "#a2273C" ,// couleur du tabnavigateur
        borderTopWidth: 1,
        borderColor: "#3f101C",

      }
    }
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

