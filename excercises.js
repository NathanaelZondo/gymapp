import React from 'react';
import { TouchableHighlight,Form,Button,StyleSheet, Text, View,Image,FlatList,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Landing from '../gymapp/Landing';
import Excercises from '../gymapp/excercises';
import AppStackNavigator from '../gymapp/App';
import { FormLabel, FormInput, FormValidationMessage,Header, ThemeProvider,ListItem } from 'react-native-elements'
import {auth} from '../gymapp/firebase';
import timer from '../gymapp/timer';
import { LinearGradient } from 'expo-linear-gradient';


export default class Home extends React.Component {
  constructor(props) {
    super(props);

   console.log(props.navigation.state.params.user[1])

if(props.navigation.state.params.user[0]=="Abs")
{
  this.state =[{name:'Abs',surname:'ab',img:require('../gymapp/assets/arms/ab1.gif'),description:"With your back on the ground, raise on leg up,then drop it down but not completely and then raise it up again",title:"Single Leg Lift"},
  {name:'Aerobics',surname:'ae',img:require('../gymapp/assets/arms/ab2.gif'),description:"With your knee on the ground and the other leg stretched far from the other. Bend your torso over the ball then stand straight again.",title:" Preacher Curl"},
  {name:'Upper Body',surname:'ub',img:require('../gymapp/assets/arms/ab3.gif'),description:"Using a suspended pole in the air, pull your entire body up and then slowly bring yourself down.",title:"Pull Ups"}
  ,{name:'Full Body',surname:'fb',img:require('../gymapp/assets/arms/ab4.gif'),description:"Drop a barbell up and down using your hands to maintain the position of the barbell.",title:"Standing Bar-Drop"}
  ,{name:'Lower Body',surname:'lb',img:require('../gymapp/assets/arms/ab5.gif'),description:"Using an elevated bar, push your body up and down.",title:"Elevated Push Ups"}

],
this.pic = {bck:require('../gymapp/assets/abs.jpg')};

console.log(this.state)

}
else if(props.navigation.state.params.user[0]=="Cardio")
{
  this.state =[{name:'Abs',surname:'ab',img:require('../gymapp/assets/arms/cardio1.gif'),description:"Generally for walking, running or climbing while staying in the same place",title:"Tread Mill"},
  {name:'Aerobics',surname:'ae',img:require('../gymapp/assets/arms/cardio2.gif'),description:"Jump over a rope which is held at both ends by oneself or two other people and turned repeatedly over the head and under the feet.",title:"Skipping"},
  {name:'Upper Body',surname:'ub',img:require('../gymapp/assets/arms/cardio3.gif'),description:"Cycle up to the distance you desire and use any speed of your choice.",title:"Stationary Cycle"}
  ,{name:'Full Body',surname:'fb',img:require('../gymapp/assets/arms/cardio4.gif'),description:"Rotate a hoop around your waiste and make sure that it does not fall to the ground. Maintain the motion of the hoop as much as you can.",title:"Hooping"}
  ,{name:'Lower Body',surname:'lb',img:require('../gymapp/assets/arms/cardio5.gif'),description:"Punch the punching bag as hard and as fast as you can. Make sure to maintain your pose and your punching power must be consistent",title:"Shadow Boxing"}
  ,{name:'Arms',surname:'ar',img:require('../gymapp/assets/arms/cardio6.gif'),description:"Hold two dumbells on both arms and walk with the weight in your hands.",title:"Walking Metal "}
],
this.pic ={bck:require('../gymapp/assets/aero.jpg')};
}
else if(props.navigation.state.params.user[0]=="Upper Body")
{
  this.state =[{name:'Abs',surname:'ab',img:require('../gymapp/assets/arms/upper1.gif'),description:"Using a bar suspended in the air, pull yourself up and slowly down.",title:"Pull Ups"},
  {name:'Aerobics',surname:'ae',img:require('../gymapp/assets/arms/upper2.gif'),description:"Pulling a wide bar down towards the upper chest or behind the neck.",title:"Chest Fly"},
  {name:'Upper Body',surname:'ub',img:require('../gymapp/assets/arms/upper3.gif'),description:"Using two separate bars accross two points, elevate your torso above the bars using your hands.",title:"Elevated Push Ups"}
  ,{name:'Full Body',surname:'fb',img:require('../gymapp/assets/arms/upper4.gif'),description:"Inhale, then hold your breath. Then carfully exhale and repeat the excercise a number of times.",title:"Breathing Excercise"}
  ,{name:'Lower Body',surname:'lb',img:require('../gymapp/assets/arms/upper5.gif'),description:"With both hands firmly on the ground and your legs stretched out, bend your arms so that your chest nearly touches the ground and then push up.",title:"Push Ups"}
  ,{name:'Arms',surname:'ar',img:require('../gymapp/assets/arms/upper6.gif'),description:"A lifter lies on a bench with the feet on the floor and raises a weight with both arms",title:"Bench Press "}
],
this.pic ={bck:require('../gymapp/assets/background.jpg')};
}
else if(props.navigation.state.params.user[0]=="Full Body")
{
  this.state =[{name:'Abs',surname:'ab',img:require('../gymapp/assets/arms/full1.gif'),description:"Using a bar suspended in the air, pull yourself up and slowly down.",title:"Pull Ups"},
  {name:'Aerobics',surname:'ae',img:require('../gymapp/assets/arms/full2.gif'),description:"Lift up your right knee and both arms in the air while balancing on one leg. Then take your arms down as you drop your leg.",title:"High Knee"},
  {name:'Upper Body',surname:'ub',img:require('../gymapp/assets/arms/full3.gif'),description:"Lift a barbell with both hands, then bend your knees and pull up the barbell again",title:"Semi Lift"}
  ,{name:'Full Body',surname:'fb',img:require('../gymapp/assets/arms/full4.gif'),description:"Using an elastic rope attached to a fixed point, pull the rope back and allow it to pull back as you pull back and forth.",title:"Pull Back"}
  ,{name:'Lower Body',surname:'lb',img:require('../gymapp/assets/arms/full5.gif'),description:"On all fours push your back in and out to loosen your spine",title:"Back Excercise"}
  ,{name:'Arms',surname:'ar',img:require('../gymapp/assets/arms/full6.gif'),description:"Pulling a wide bar down towards the upper chest or behind the neck.",title:"Chest Fly "}
],
this.pic ={bck:require('../gymapp/assets/fullbody.jpg')};
}
else if(props.navigation.state.params.user[0]=="Lower Body")
{
  this.state =[{name:'Abs',surname:'ab',img:require('../gymapp/assets/arms/leg1.gif'),description:"While holding your waist, drop with one knee to the ground then stand up again.",title:"Knee Drop"},
  {name:'Aerobics',surname:'ae',img:require('../gymapp/assets/arms/leg2.gif'),description:"Sit at the end of a bench thenn elevate your feet into the air and slowly bring them down as you raise them up again.",title:"Feet Up"},
  {name:'Upper Body',surname:'ub',img:require('../gymapp/assets/arms/leg3.gif'),description:"Run as fast as you can or as slow as you can. But keep on running nowhere slowly or quickly",title:"Tread Mill"}
  ,{name:'Full Body',surname:'fb',img:require('../gymapp/assets/arms/leg4.gif'),description:"Jump up and down and cross your feet in the air and squat when you land.",title:"X Cross X"}
  ,{name:'Lower Body',surname:'lb',img:require('../gymapp/assets/arms/leg5.gif'),description:"Holding a barbell with your two hands, squat then raise yourself with the barbell in the air, using your thighs to go up.",title:"Dead Lift Squat"}
  ,{name:'Arms',surname:'ar',img:require('../gymapp/assets/arms/leg6.gif'),description:"Leave the house and run around a specific destance in any area of your choosing. Wear comfortable shoes and don't talk to stranger on the road.",title:"Jogging"}
],
this.pic ={bck:require('../gymapp/assets/legs.jpg')};
}
else if(props.navigation.state.params.user[0]=="Arms")
{
  this.state =[{name:'Abs',surname:'ab',img:require('../gymapp/assets/arms/arm1.gif'),description:"Lift a dumbell of any weight with one arm while seated",title:"Single Arm Lift"},
  {name:'Aerobics',surname:'ae',img:require('../gymapp/assets/arms/arm2.gif'),description:"A barbell is lifted by flexing the elbows, with the upper arms resting on an angled bench.",title:" Preacher Curl"},
  {name:'Upper Body',surname:'ub',img:require('../gymapp/assets/arms/arm3.gif'),description:"Lift a a barbell using both arms up to your waist and drop it to the level of your knees.",title:"Semi Dead Lift"}
  ,{name:'Full Body',surname:'fb',img:require('../gymapp/assets/arms/arm4.gif'),description:"Lift a dumbell of any weight up and down using one arm or two.",title:"Standing Arm"}
  ,{name:'Lower Body',surname:'lb',img:require('../gymapp/assets/arms/arm5.gif'),description:"Stretch both your arms 180 degrees. Lift both your arms 90 degrees with your foot touching your thigh at the same itme.",title:"Human Butterfly"}
  ,{name:'Arms',surname:'ar',img:require('../gymapp/assets/arms/arm6.gif'),description:"Pulling a wide bar down towards the upper chest or behind the neck.",title:"Chest Fly "}
],
this.pic = {bck:require('../gymapp/assets/arm.jpg')};

}



  

  


  }

 path(para){
console.log("Medics ",para)





}
  

componentDidMount() {
  this.state=null
}




  render() {
    return (
      
<ImageBackground source={this.pic.bck} 

style={{resizeMode:"cover",flex:1}}>
      <LinearGradient

colors={['rgba(0,0,0,01)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.7)']}
style={{ flex:1 }}>

  

<View style ={{flex:1}}>

<View style ={{backgroundColor:"",height:100.,paddingTop:60,flexDirection:"row"}}>


<View style ={{paddingRight:270}}>
<Text></Text>
</View>





</View>




  <FlatList  
 
  keyExtractor={(item)=>item.surname}
  data ={this.state}
  renderItem={({item})=>(

  <TouchableHighlight style ={styles.card} onPress={()=>{
console.log(item.name)
this.props.navigation.navigate('Timer')

this.props.navigation.navigate('Timer', { chosenExcercise: [item.title, item.description] })

  }}>
    <View style ={{flexDirection:'row',alignItems:"flex-start"}}>
      <View style ={{  borderStyle:'solid',borderWidth:1,borderColor:"white",margin:5}}>
       <Image
        style={styles.tinyLogo}
        source={item.img}
      />
      </View>
      <View>
      <Text style ={styles.titles}>{item.title}</Text>
      <Text style ={styles.description}>{item.description}</Text>
      </View>
      </View>
   
    </TouchableHighlight>
  
  )}
  
  >


  </FlatList>
      

</View>
</LinearGradient>
</ImageBackground> 

    );
  }
}

const styles = StyleSheet.create({
  titles:{
    fontWeight:"bold",
    textAlign:'auto',
    padding:2,
    marginBottom:3,
    color:"white",
  },
  description:{
   alignItems:'flex-start',
   padding:2,
   color:"white",
  
   justifyContent:'flex-start', 
   width:250
  }
,
card:{
  height: 112,
marginVertical:10,
  borderStyle:'solid',borderWidth:1,borderColor:"white",
  width:355
}
,  pic: {
 
  height: 50,
},
bi: {

  height: 250,
},
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'white',
},
innerContainer: {
  alignItems: 'center',
},
container: {
  flex: 1,
  justifyContent: 'center',
},
tinyLogo:{
  width:100,
  height:100,

}

})