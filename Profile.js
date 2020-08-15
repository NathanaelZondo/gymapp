import React from 'react';
import {TextInput, Button,StyleSheet, Text, View } from 'react-native';
import {auth} from '../gymapp/firebase';

export default class Profile extends React.Component {


constructor(props)
{
super(props)
this.state={
  name:'',
  surname:'',
  cellphone:'',
  
}
}

  render() {
    return (
<View>
<TextInput placeholder ='Enter your name' onChangeText={(event)=>{
 
this.setState({name:event})
}}></TextInput>
<TextInput placeholder='Enter your surname' onChangeText={(event)=>{
 
this.setState({surname:event})
}}></TextInput>
<TextInput placeholder='Enter your cellphone number' onChangeText={(event)=>{

this.setState({cellphone:event})
}}></TextInput>
<Text></Text>

<Button
        title="Save"
        onPress={() =>{
console.log(this.state)

auth.currentUser.displayName.replace(this.state.name)

console.log(auth.currentUser.displayName)
        }
        
        }
      />
</View>

    );
  }
}