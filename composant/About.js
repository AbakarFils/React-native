import React from 'react'
import {View,Text,StyleSheet, Image, Button} from 'react-native'
import { height } from 'window-size';
import Style, { } from "../Style";
// ****************************************************************************
// *                                commentaire                               *
// ****************************************************************************

export default class About extends React.Component
{
    static navigationOptions= {
        tabBarIcon :() => {
            return <Image source={require('./icons/user.png')} style={{ width: 20, height: 20}} />
        }
    }
    search(){
        this.props.navigation.navigate('Search') // Navigue vers la route Search (dans TagNavigator)
    }
    render(){
        return (
        <View style ={Style.container}>
            <Text style={Style.title} >A propos de moi de moi </Text>
            <Text> 
                lorem ipsum dolor sit amet; constructor
                je viens de faire mon premier test et ça marche j'ai galerer
            </Text>
            <Button color ={Style.color} onPress={()=>this.search()} title="Rechercher Une ville"/> // quand je clic deçu j'appelle la methode search ci haut
       
        </View>    
        )
    }
}

