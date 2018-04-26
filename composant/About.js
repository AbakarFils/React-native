import React from 'react'
import {View,Text,StyleSheet, Image} from 'react-native'
import { height } from 'window-size';
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

    render(){
        return (
        <View style ={style.view}>
            <Text style={style.title} >A propos de moi de moi </Text>
            <Text> 
                lorem ipsum dolor sit amet; constructor
                je viens de faire mon premier test et ça marche j'ai galerer
            </Text>
       
        </View>    
        )
    }
}
// ****************************************************************************
// *      le style que je vais utiliser pour les parties de mon composant     *
// ****************************************************************************

const style =StyleSheet.create(
{
    view : {
        margin:20
    },
    title : {
        fontSize: 22, 
        marginBottom: 20
    }
})