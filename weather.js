import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';

export default function weather() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity ] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const place = await Location.reverseGeocodeAsync({
        latitude : location.coords.latitude,
        longitude : location.coords.longitude
    });

    let city;
    place.find( p => {
      city = p.city
      console.log(city)
      setCity(p.city)
    });
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(location.coords.latitude)
    console.log(location.coords.longitude)

  }





  



    const [weatherData, setweatherData] = useState({main:{feels_like:0,
        humidity:0,
        temp_max:0,
        temp_min:0
    },weather:[{description:''}]});

    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+city+',ZA,current&units=metric&APPID=cad69203f2aa07da49fd75d2e898aaa2')
    .then(res => res.json())
    .then(data => {setweatherData(data.list[0])
    
  console.log("Weather = ",weatherData.weather[0].description )
    
    } )

   
    
    const image = { uri: "../gymapp/assets/abs.jpg" }; 



  return ( 
    <ImageBackground source={require('../gymapp/assets/b29.jpg')} style={styling.image}>

<LinearGradient

colors={['rgba(0,0,0,01)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,1)']}
style={{  alignItems:"center",
textAlign:'center'}}>
    <View style ={{backgroundColor:"none",height:800,alignItems:'center'}}>


      <View>
      
  <Text style ={styling.locations}>{city}</Text>
        <Text style ={styling.desc}>{weatherData.weather[0].description.toUpperCase()}</Text>
        </View>
      

        <View style ={{flexDirection:"row"}}>
        {/* <Text style ={styling.humidity}>Humidity {weatherData.main.humidity }</Text> */}
        {/* <Text style ={styling.humidity}>{weatherData.weather[0].description}</Text> */}
        </View>
        
      
        <View style ={{flexDirection:"column"}}>
         <Text style ={styling.humidity}>  Feels          {weatherData.main.feels_like} °С  </Text>
        <Text style ={styling.humidity}>   Min            {weatherData.main.temp_min} °С    </Text>
        <Text style ={styling.humidity}>   Max            {weatherData.main.temp_max} °С    </Text></View>

{/* <Text style ={{padding:10}}>.</Text>
        <View style ={{flexDirection:"row"}}>
        <Text style ={styling.humidity}>Humidity {weatherData.main.humidity }</Text>
        <Text style ={styling.humidity}>{weatherData.weather[0].description}</Text>
        </View> */}
        
      
        {/* <View style ={{flexDirection:"row"}}>
         <Text style ={styling.humidity}>Feels {weatherData.main.feels_like} °С</Text>
        <Text style ={styling.humidity}>Min {weatherData.main.temp_min} °С</Text>
        <Text style ={styling.humidity}>Max {weatherData.main.temp_max} °С</Text></View> */}
       

     
   
    </View>
    </LinearGradient>
    </ImageBackground>
   
  );
}


const styling =StyleSheet.create(
{
locations:{color:"white",
fontSize:50,
paddingTop:60,
marginBottom:0,
paddingLeft:10

},
humidity:{color:"white",
fontSize:20,
marginLeft:0,
marginBottom:2,
paddingLeft:4,
textAlign:'center',
borderColor:'white',
borderStyle:'solid',
borderWidth:0.5,
borderBottomColor:'white',
borderTopColor:'rgba(0,0,0,0)',
borderLeftColor:'rgba(0,0,0,0)',
borderRightColor:'rgba(0,0,0,0)'


},
image: {
 
  resizeMode:"cover"
 
 
},
desc:{color:"white",
fontSize:40,
paddingTop:60,
marginBottom:150,
paddingLeft:10

},
}
)