import React,{ Component } from 'react';
import { TextInput,Button,StyleSheet, Text, View,ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { render } from 'react-dom';
import {firebase} from '../gymapp/firebase';
import {auth} from '../gymapp/firebase';
import { Router } from "@reach/router";
import Home from '../gymapp/Home';
import accel from '../gymapp/accel';
import { createStackNavigator,StackNavigator } from 'react-navigation-stack';
import Friends from './Friends';
import {createAppContainer} from 'react-navigation';
import Profile from '../gymapp/Profile';
import Landing from '../gymapp/Landing';
import Register from '../gymapp/register';
import weather from '../gymapp/weather';
import news from '../gymapp/news';
import timer from '../gymapp/timer';
import menu from '../gymapp/menu';
import about from '../gymapp/about';
import viewprofile from '../gymapp/viewprofile';
import excercises from '../gymapp/excercises';
import {decode, encode} from 'base-64';

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }



const  AppStackNavigator = createAppContainer(
  createStackNavigator(
    {
      Login: Home,
      Friends:Friends,
      Profile:Profile,
      Landing:Landing,
      Register:Register,
      Accelorometer:accel,
      Weather:weather,
      News:news,
      Timer:timer,
      Menu:menu,
      Excercises:excercises,
      Viewprofile:viewprofile,
      About:about
     
    },
    {
      
      headerMode: 'none',
      initialRouteName: 'Login',
    },
    
  ),
);




class App extends Component {
  constructor(props)
  {
super(props)
  }
render(){
 return  <AppStackNavigator initialRouteName='Login'/>
}

}
export default App;
