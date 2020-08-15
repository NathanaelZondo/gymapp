import React, { useState } from "react";
import { TouchableHighlight,Form,Button,StyleSheet, Text, View,Image,FlatList,ImageBackground,TouchableOpacity } from 'react-native';
import {DrawerNavigator,StackNavigator, } from 'react-navigation';
import Profile from '../gymapp/Profile';
import Landing from '../gymapp/Landing';
import Register from '../gymapp/register';
import weather from '../gymapp/weather';
import news from '../gymapp/news';
import timer from '../gymapp/timer';
import menu from '../gymapp/menu';
import about from '../gymapp/about';
import { render } from "react-dom";
import { LinearGradient } from 'expo-linear-gradient';
import { withTheme } from "react-native-elements";

export default class mens extends React.Component {
    constructor(props) {
      super(props)
     
  
}
  


render()
{
    return (

 




        <View style={styles.container}>

<ImageBackground source={require('../gymapp/assets/b7.jpg')} style ={{flex:1}}>

<LinearGradient

colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
style ={{flex:1,paddingTop:100}}
>



          <View style={{marginBottom:80}}>
            <Text style ={{textAlign:'center',color:'white',fontSize:50}}>Menu</Text>
          </View>
    



          <LinearGradient

colors={['rgba(102,0,0,0.9)', 'rgba(0,1,3,09)', 'rgba(0,0,0,0.5)']}
style ={{}}
>
          <TouchableOpacity
          key={1}
            style={styles.button}
            onPress={
    
                (key)=>{
    
                    this.props.navigation.navigate('Weather')
    
                }}
          >
            <Text style ={{color:"white"}}>Gym Info</Text>
          </TouchableOpacity>
          </LinearGradient>




          <LinearGradient

colors={['rgba(102,0,0,0.9)', 'rgba(0,1,3,09)', 'rgba(0,0,0,0.5)']}
style ={{}}
>

          <TouchableOpacity
          key={2}
            style={styles.button}
            onPress={
    
                (key)=>{
    
                    this.props.navigation.navigate('Viewprofile')
    
                }}
          >
            <Text style ={{color:"white"}}>Profile</Text>
          </TouchableOpacity>
</LinearGradient>


<LinearGradient

colors={['rgba(102,0,0,0.9)', 'rgba(0,1,3,09)', 'rgba(0,0,0,0.5)']}
style ={{}}
>
          <TouchableOpacity
    
            style={styles.button}
            onPress={
    
                (key)=>{
    
                  this.props.navigation.navigate('About');
                  console.log("about")
    
                }}
          >
            <Text style ={{color:"white"}}>About</Text>
          </TouchableOpacity>

</LinearGradient>


<LinearGradient

colors={['rgba(102,0,0,0.9)', 'rgba(0,1,3,09)', 'rgba(0,0,0,0.2)']}
style ={{}}
>

          <TouchableOpacity
          
            style={styles.button}
            onPress={()=>{
              this.props.navigation.navigate('Login')
      
               
    
                }}>
            <Text style ={{color:"white"}}>Sign Out</Text>
          </TouchableOpacity>
</LinearGradient>






          </LinearGradient>
          </ImageBackground>
        </View>
      
      );

     

    

              
}


}    


const styles = StyleSheet.create({
  container: {
  
    flex: 1,
    justifyContent:"flex-start",
    paddingHorizontal: 10,
    backgroundColor:"black",
    
  },
  button: {
    alignItems: "flex-start",
    backgroundColor: "rgba(120,15,43,0.0 )",
    padding: 20,
    marginBottom:20,
    color:"white",
    borderTopColor:"rgba(255,255,255,0.9)",
    borderBottomColor:"rgba(255,255,255,0.9)",
    borderStyle:"solid",
    borderWidth:0.5,
    borderLeftColor:'rgba(0,0,0,0)'
  
  },
  countContainer: {
    alignItems: "flex-start",
    padding: 10
  }
});





