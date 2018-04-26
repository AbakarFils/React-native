import React from 'react'
import {TextInput, Image, Button, View} from 'react-native'
import Style from '../Style';
import List from "./List";
import { StackNavigator } from '../../../../Users/Mahamat Abakar@Fils/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-navigation';
// ****************************************************************************
// *       pardefaut on a Dakar dans le champs du TextInput mais quand        *
// *             on va changer le texte avec la fonction onchangetext on va lancer *
// *             une fonction qui va prendre en parametre un text et voir son impementation *
// *                           pour savoir ce qu'elle devrafaire              *
// ****************************************************************************
//
class Search extends React.componets{
    
    static navigationOptions = {
        title: "Rechercher une ville",
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} style={{ width: 20, height: 20 }} /> //insertion de l'icon hone dans sa partie
        }
    }

    constructor(props)
    {
        
        super(props) 
        this.state ={
            city: "Dakar"
        }
    }
    submit() {
        this.props.navigation.navigate('Result',{city:this.state.city}) // navigue sur la page Result et
                                                                        // prends comme argument city qui a été tapée

    }

    setCity(city)
    {
        this.setState({
            city :city
        })
    }

    render(){
        return (
            <View style ={Style.container}>
                <TextInput
                    onChangeText={(text) => this.setCity(text)}
                    underlineColorAndroid='transparent'
                    style={Style.input}
                    value={this.state.city}
                />
                <Button color={Style.color} onPress={() => this.submit()} title="Rechercher" />
            </View>
        )
            
    }
}
const navigationOptions={
    headerStyle :Style.header,
    headerTitleStyle:Style.headerTitleStyle
}

export default StackNavigator({
    Search : {
        screen :Search,
        navigationOptions
    },
    Result : {
        screen: List,
        navigationOptions
    }
})