import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,ImageBackground } from "react-native";
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
     

    //   firestore.collection('stats').where("uid","==",auth.currentUser.uid).where('cdate',"<=",new Date().toLocaleDateString()).get().then(res=>{

    //     res.forEach(val=>{

    //         console.log(val.data())
    //     })
    //   })

  firestore.collection('users').where("uid","==",auth.currentUser.uid).get().then(res=>{

    res.forEach(val=>{
        console.log(val.data().name)
        console.log(val.data().username)
        this.state.ar.push(val.data().name,val.data().username)
        
        this.setState({name:val.data().name});
        this.setState({username:val.data().username});

        console.log("35",this.state)
    })
  })
}
  

render() {
    const data = [30, 10, 40, 95, 0, 24, 85, 91, 35, 53, 0,50]
   

    return (
        <ImageBackground source={require('../gymapp/assets/b32.jpg')} style={{flex:1}}>

        <LinearGradient
        
        colors={['rgba(0,0,0,01)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,1)']}
        style={{  alignItems:"center",
        textAlign:'center',paddingTop:60,flex:1}}>
        <View style ={{backgroundColor:'none'}}>

    <Text style ={{color:'white',textAlign:'center',marginBottom:30,fontSize:30
}}>{this.state.ar[0]}'s progress</Text>

    <View style ={{flexDirection:'row'}}>
    <Text style ={{color:'white',marginBottom:10,marginRight:80,fontSize:17}}>Start Date:{new Date().toLocaleDateString()} </Text>
    <Text style ={{color:'white',paddingBottom:50,fontSize:17}}>Current Date:{new Date().toLocaleDateString()} </Text>
    </View>
    <Text style ={{color:'white',textAlign:'center'}}>Minutes(100)</Text>

        <LineChart
            style={{ height: 400 ,width:350}}
            data={data}
            svg={{ stroke: 'white' }}
            contentInset={{ top: 10, bottom: 10 }}
        >
            <Grid />
        </LineChart>

        <View style ={{flexDirection:"row",}}>
<Text style ={{color:'white',marginRight:330}}>0</Text>
<Text style ={{color:'white'}}>12</Text>

        </View>
        <Text style ={{color:'white',textAlign:"center"}}>Months</Text>
        </View>
        </LinearGradient>
    </ImageBackground>
    )
}        



}    


const styles = StyleSheet.create({

});





