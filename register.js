import React from 'react';
import { Image,Form,Button,StyleSheet, Text, View,TextInput, ImageBackground } from 'react-native';
import {DrawerNavigator,StackNavigator, } from 'react-navigation'
import Landing from '../gymapp/Landing';
import AppStackNavigator from '../gymapp/App';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {auth,firestore} from '../gymapp/firebase';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    const {email} =""
    this.state = {
        username: '',
        password:'',
        error:'',
        uid:''
    };
 

    this.handleChange = this.handleChange.bind(this);

    
  }


  
  handleChange(event) {
    this.setState({error:''});
    this.setState({email: event.nativeEvent.text});
  

   
  }






  render() {
    return (

<View style={{flex:1}}>
<ImageBackground source={require('../gymapp/assets/b33.jpg') } 

style={styles.image}>

<LinearGradient

          colors={['rgba(0,0,0,01)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,1)']}
          style={{ padding: 15,height:750,paddingTop:110 }}>
            <View style ={{flexDirection:'column',alignItems:'center',marginBottom:10}}>
    <Image
        style={{height:50,width:50}}
        source={require('../gymapp/assets/logo.png')}
        />
            
      </View>
      <Text style ={{textAlign:'center',fontSize:25,color:'white',marginBottom:0}}>Create your account</Text>     
            <View style ={{shadowColor:'black',borderWidth: 0,borderStyle:'solid',borderColor:'white',backgroundColor:'rgba(0,0,0,0.7)',height:450,paddingTop:20,paddingBottom:1}}>

    <Text style ={{color:'red',textAlign:'center'}}>{this.state.error}</Text>
    
    <TextInput underlineColorAndroid={'white'}  selectionColor={'#660000'} type ="text"  placeholder="Username" style ={{fontSize:17,lineHeight:40,height:50,paddingBottom:1,paddingLeft:10,marginBottom:25,color:'white'}} onChange={(text)=>{
       
       this.setState({error:''});
        this.setState({name: text.nativeEvent.text});
    }}></TextInput>
      <TextInput underlineColorAndroid={'white'}  selectionColor={'#660000'} type ="text" keyboardType='phone-pad'  placeholder="Phone" style ={{fontSize:17,lineHeight:40,height:50,paddingBottom:1,paddingLeft:10,marginBottom:25,color:'white'}} onChange={(text)=>{
       
       this.setState({error:''});
        this.setState({phone: text.nativeEvent.text});
    }}></TextInput>
    <TextInput underlineColorAndroid={'white'}  selectionColor={'#660000'} keyboardType="email-address" type ="email"   onChange={this.handleChange} placeholder="Email" style ={{fontSize:17,lineHeight:40,height:50,marginBottom:20,paddingLeft:10,color:'white'}}></TextInput>
    <TextInput underlineColorAndroid={'white'}  selectionColor={'#660000'} type ="password"  secureTextEntry={true} visible-password ='false'  placeholder="Password" style ={{fontSize:17,lineHeight:40,height:50,paddingBottom:1,paddingLeft:10,marginBottom:30,color:'white'}} onChange={(text)=>{
       
       this.setState({error:''});
        this.setState({password: text.nativeEvent.text});
    }}></TextInput>
   


    
        <Button value="Submit"
      color="#660000" 
     
        onPress={()=>{
    

            


console.log("94",this.state.email)
            auth.createUserWithEmailAndPassword(this.state.email,this.state.password).then(res=>{
                console.log(res.user.uid)
            this.setState({uid:res.user.uid})
            this.setState({password:'not saved'});
              firestore.collection('users').add(this.state)
                console.log('profile created')
                this.props.navigation.navigate('Landing', { user: [res.user.uid, res.user.displayName, res.user.emailVerified] })
           
              
            }).catch(err=>{
                this.setState({error:err.message})
            })

            
        }}
        title="Register"
      />



<View style ={{paddingTop:30,flexDirection:'row',justifyContent:'center'}}>

<Text 
style={{color: 'white'}}
      onPress={() => this.props.navigation.navigate('Login')}>
  Sign in
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
