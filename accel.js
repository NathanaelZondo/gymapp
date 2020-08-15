import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { Header,Button, ThemeProvider } from 'react-native-elements';


export default function App() {

  




  const [data, setData] = useState({});
  const [counts, setCounts] = useState(0);

  useEffect(() => {
    _toggle();
  }, []);

  useEffect(() => {
    return () => {
      _unsubscribe();
    };
  }, []);

  

  const _toggle = () => {
    if (this._subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _slow = () => {

console.log('_slow')
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=cad69203f2aa07da49fd75d2e898aaa2')
    .then(res => res.json())
    .then(data => console.log("Data List Loaded", data.list[0].main))

    Accelerometer.setUpdateInterval(2000);
    
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };

  const _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };
 
  let { x, y, z } = data;
  let sum =0
  if(round(y)<0.7)
  {
    
    console.log("Plus One",round(y));
  }
  return (
    <View style={styles.sensor}>

      
  <Text>Counter</Text>
      <Text style={styles.count}>{counts}</Text>
      <Text style={styles.text}>
       y: {round(y)} 
      </Text>
      <Text style={styles.text}>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
      <View style={styles.buttonContainer}>
     
     <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
       <Text>Slow</Text>
     </TouchableOpacity>

   </View>
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  count:{
padding:10,
height:150,
fontSize:80,
justifyContent: 'center',
alignItems: 'center',
textAlign: 'center',
borderColor:'black',
borderStyle:'solid',
borderWidth:2,
width:100,
  }
  
  ,
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#660000',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#660000',
  },
  sensor: {
    marginTop: 200,
    paddingHorizontal: 10,
    flex:1,
    flexDirection:"column",
alignItems: 'center',
textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom:20,
  },
});
