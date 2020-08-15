import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Header,Button, ThemeProvider } from 'react-native-elements';


export default function news() {


  const _slow = () => {

console.log('_slow')
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=cad69203f2aa07da49fd75d2e898aaa2')
    .then(res => res.json())
    .then(data => console.log("Data List Loaded", data.list[0].main))

   
    
  };



  return (
    <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
<Text>Good Morning</Text>
<TouchableOpacity onPress={_slow}>
       <Text>News</Text>
     </TouchableOpacity>
    </View>
  );
}

