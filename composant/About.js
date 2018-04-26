import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
// ****************************************************************************
// *                                commentaire                               *
// ****************************************************************************

export default class About extends React.Component
{
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