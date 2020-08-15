import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,ImageBackground,Image } from "react-native";
import { LineChart, Grid} from 'react-native-svg-charts'
import {firestore} from '../gymapp/firebase';
import {auth} from '../gymapp/firebase';
import { LinearGradient } from 'expo-linear-gradient';

export default class mens extends React.Component {
    constructor(props) {
      super(props)

      this.state ={
          ar:[]
      }
     
  
 
}
  

render() {
   
   

    return (
        <ImageBackground source={require('../gymapp/assets/b12.jpg')} style={{flex:1}}>

        <LinearGradient
        
        colors={['rgba(0,0,0,01)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,1)']}
        style={{  alignItems:"center",textAlign:'center',paddingTop:60,flex:1}}>

            <View style ={{alignItems:'center'}}>

            <Image
        style={{height:80,width:80}}
        source={require('../gymapp/assets/logo.png')}
        />

                <Text style ={{color:'white',fontSize:25,textAlign:'center',marginBottom:50}}>Gym App</Text>


                <Text style ={{lineHeight:40,color:'white',textAlign:'center',fontSize:15,marginBottom:80}}>Whether you want to focus on body-sculpting with Pilates, fire up your muscles with strength-training exercises, get a stronger back, sculpt beach-ready abs, or relax and revive with yoga, Home Workout has an exercise program to suit every goal and mood. Featuring four complete routines from each of these books in the 15 Minute series-Everyday Pilates, Gentle Yoga, Better Back, Total Body Workout, and Abs Workouts, Home Workout offers the home exerciser fantastic choice, expert guidance, and great results!</Text>
           
           <Text style ={{color:'white'}}>Copyright © 2020</Text>
           
            </View>

       
        </LinearGradient>
    </ImageBackground>
    )
}        



}    


const styles = StyleSheet.create({

});





