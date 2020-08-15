import React from 'react';
import { Image,Form,Button,StyleSheet, Text, View,TextInput, ImageBackground } from 'react-native';
import {DrawerNavigator,StackNavigator, } from 'react-navigation'
import Landing from '../gymapp/Landing';
import AppStackNavigator from '../gymapp/App';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {auth} from '../gymapp/firebase';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
        username: '',
        password:'',
        error:''
    };
 

    this.handleChange = this.handleChange.bind(this);

    
  }

  handleChange(event) {
    this.setState({error:''});
    this.setState({username: event.nativeEvent.text});
   
  }






  render() {
    return (




<View style={{flex:1}}>


<ImageBackground source={require('../gymapp/assets/b15.jpg')} 

style={styles.image}>

<LinearGradient

          colors={['rgba(0,0,0,01)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,1)']}
          style={{ padding: 15,height:750,paddingTop:110 }}>
            <View style ={{flexDirection:'column',alignItems:'center'}}>
    <Image
        style={{height:50,width:50}}
        source={require('../gymapp/assets/logo.png')}
        />
        <Text style ={{fontSize:30,color:'white',marginBottom:40}}>Log in to Gymo</Text>          
      </View>

            <View style ={{shadowColor:'black',borderWidth: 0,borderStyle:'solid',borderColor:'white',backgroundColor:'rgba(0,0,0,0.7)',height:350,paddingTop:40,paddingBottom:1}}>

    <Text style ={{color:'red',textAlign:'center'}}>{this.state.error}</Text>
    <TextInput underlineColorAndroid={'white'}  selectionColor={'#660000'} keyboardType="email-address" type ="email"    onChange={this.handleChange} placeholder="Enter your email address" style ={{fontSize:17,lineHeight:40,height:50,marginBottom:20,paddingLeft:10,color:'white'}}></TextInput>
    <TextInput underlineColorAndroid={'white'}  selectionColor={'#660000'} type ="password"  secureTextEntry={true} placeholder="Enter your password" style ={{fontSize:17,lineHeight:40,height:50,paddingBottom:1,paddingLeft:10,marginBottom:30,color:'white'}} onChange={(text)=>{
       
       this.setState({error:''});
        this.setState({password: text.nativeEvent.text});
    }}></TextInput>
        <Button value="Submit"
      color="#660000" 
     
        onPress={()=>{
    

            


            auth.signInWithEmailAndPassword(this.state.username,this.state.password).then(res=>{
                console.log(res)
                this.props.navigation.navigate('Landing', { user: [res.user.uid, res.user.displayName, res.user.emailVerified] })
            }).catch(err=>{
                this.setState({error:err.message})
            })

            
        }}
        title="Log In"
      />



<View style ={{paddingTop:30,flexDirection:'row',justifyContent:'center'}}>
<Text 
style={{color: 'white'}}
      onPress={() => this.props.navigation.navigate('Register')}>
  Forgot password? &nbsp;
</Text>
<Text 
style={{color: 'white'}}
      onPress={() => this.props.navigation.navigate('Register')}>
  Sign up
</Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});
