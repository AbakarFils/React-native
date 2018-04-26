import React from 'react'
import {TextInput} from 'react-native'
// ****************************************************************************
// *       pardefaut on a Dakar dans le champs du TextInput mais quand        *
// *             on va changer le texte avec la fonction onchangetext on va lancer *
// *             une fonction qui va prendre en parametre un text et voir son impementation *
// *                           pour savoir ce qu'elle devrafaire              *
// ****************************************************************************
//
export default class Home extends React.componets{

    constructor(props)
    {
        
        super(props) 
        this.state ={
            city: "Dakar"
        }
    }

    setCity(city)
    {
        this.setState({
            city :city
        })
    }

    render(){
        return (
            <TextInput
                       
 
            onChangeText ={(text) => this.setCity(text)}
            underlineColorAndroid= 'transparent'
            style ={{height: 40 , borderColor: 'gray', borderWidth: 1}}
            value ={this.state.city}
            />
        )
    }
}