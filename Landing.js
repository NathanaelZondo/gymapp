import React from 'react';
import { TouchableHighlight,Form,Button,StyleSheet, Text, View,Image,FlatList,ImageBackground,Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import Landing from '../gymapp/Landing';
import AppStackNavigator from '../gymapp/App';
import { FormLabel, FormInput, FormValidationMessage,Header, ThemeProvider,ListItem } from 'react-native-elements'
import {auth} from '../gymapp/firebase';




export default class Home extends React.Component {
  constructor(props) {
    super(props);

  // console.log(props.navigation.state.params.user)  {name:'Lower Body',surname:'lb',img:require('../gymapp/assets/legs.jpg')}

  this.state =[{name:'Full Body',surname:'fb',img:require('../gymapp/assets/fullbody.jpg')},
  {name:'Cardio',surname:'ae',img:require('../gymapp/assets/aero.jpg')},
  {name:'Upper Body',surname:'ub',img:require('../gymapp/assets/background.jpg')}
  ,{name:'Lower Body',surname:'lb',img:require('../gymapp/assets/legs.jpg')}
  ,{name:'Abs',surname:'ab',img:require('../gymapp/assets/abs.jpg')}
  ,{name:'Arms',surname:'ar',img:require('../gymapp/assets/arm.jpg')}
]


  console.log(this.state)

  


  }

 path(para){
console.log(para)
}
  


  render() {
    return (

<View style ={{flex:1}}>
<View style ={{backgroundColor:'#660000',height:100,paddingTop:60,flexDirection:"row"}}>


<View style ={{paddingRight:270}}>

  <Text style ={{color:'white',paddingLeft:20,fontWeight:"bold"}} onPress={()=>{
  this.props.navigation.navigate('Menu')
}}>Menu</Text>
{/* <Button title ="Menu"  color="#660000" ></Button> */}
</View>





</View>





  <FlatList  
  keyExtractor={(item)=>item.surname}
  data ={this.state}
  renderItem={({item})=>(
    <ImageBackground source={item.img} style ={styles.bi} >


<LinearGradient
        
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.3)']}
        style={{ flex:1}}>


  <TouchableHighlight style ={styles.card} onPress={()=>{
console.log(this.state.img)

this.props.navigation.navigate('Excercises', { user: [item.name,item.img] })

  }}>
   
   
    <Text style ={{color:'white',fontSize:15,fontWeight:"bold",paddingLeft:20}}>{item.name}</Text>
   
    </TouchableHighlight>
    </LinearGradient>
   </ImageBackground>
  )}
  
  >


  </FlatList>
      

</View>
    );
  }
}

const styles = StyleSheet.create({
card:{
  
  
  height: 50,
marginVertical:10,
  flex:1
}
,  pic: {
 
  height: 50,
},
bi: {

  height: 150,
},
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'grey',
},
innerContainer: {
  alignItems: 'center',
},
container: {
  flex: 1,
  justifyContent: 'center',
}

})