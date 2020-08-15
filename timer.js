import React from 'react';
import { Text, View, Button, Vibration, Platform } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import {firestore} from '../gymapp/firebase';
import {auth} from '../gymapp/firebase';

export default class AppContainer extends React.Component {
  state = {
    expoPushToken: '',
    notification: {},
    time:0,
    usertime:0,
    default:false,
    b1:255,
    b2:255,
    b3:255,
    c1:0,
    c2:0,
    c3:0,
    title:"",
    description:""
  };





    countingAdd =()=>
  {
    
      this.setState({time:this.state.time+60})
console.log("state = ",this.state.time)

  }


  countingSub =()=>
  {
    
      this.setState({time:this.state.time-60})
      if(this.state.time==0)
      {
        alert("You can not subtract below zero minutes")

        this.setState({time:0,usertime:0})

      
      }
console.log("state = ",new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate(),auth.currentUser.uid,this.state.title,new Date().toLocaleDateString())

  }

  _interval;
  onStart = () => {

    var count =0;
    var x =0;




if(this.state.time ==0)
{




  this.onPause()
  count =0;
  this.state.time=0
  alert("The number of minutes must be greater than zero.")
}
else{
  this.state.default=true
       this._interval = setInterval(() => {

        count =count+1
        this.setState({usertime:count})
      console.log('counting   xxxxxx',count%2)

   
   x =x+1
   console.log(x)
   if(x==4)
   {
     x=0
   }
     
      this.setState({b1:Math.round(Math.random()*255).toString()}) 
      this.setState({b2:Math.round(Math.random()*255).toString()}) 
      this.setState({b3:Math.round(Math.random()*255).toString()}) 


      this.setState({c1:Math.round(Math.random()*255).toString()}) 
      this.setState({c2:Math.round(Math.random()*255).toString()}) 
      this.setState({c3:Math.round(Math.random()*255).toString()}) 


      if(count == this.state.time)
       {
        
        this.setState({b1:255}) 
        this.setState({b2:255})                                      
        this.setState({b3:255}) 
        this.state.default=false
        console.log("state = ",new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate(),auth.currentUser.uid,this.state.title)

        firestore.collection('stats').add({uid:auth.currentUser.uid,day:new Date().getDate(),month:new Date().getMonth()+1,year:new Date().getFullYear(),title:this.state.title,time:this.state.time,cdate:new Date().toLocaleDateString()}).then(res=>{
          console.log(res)

          alert("Your session was uploaded to the database for your statistics.")
        })

        this.setState({c1:0}) 
        this.setState({c2:0}) 
        this.setState({c3:0}) 
        this.onPause();
           this.sendPushNotification();

           this.setState()
       }
       
       

    }, 1000);
  }
  }
  
  onPause = () => {
    clearInterval(this._interval);
}



startCount =()=>{


    let count =0;

    console.log(this.state.time)
    var usertime =this.state.time
   
    // this.sendPushNotification()


    this.onStart()

}

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  
  componentDidMount() {
    console.log("Did Mount",console.log(this.props.navigation.state.params.chosenExcercise))

    this.setState({title:this.props.navigation.state.params.chosenExcercise[0]})
    this.setState({description:this.props.navigation.state.params.chosenExcercise[1]})
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: this.state.title+" alert!",
      body: 'Time is up!',
      data: {data:''},
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };
  jewelStyle = ()=> {
   let b1= this.state.b1.toString()
   let b2= this.state.b2.toString()
   let b3= this.state.b3.toString()
   var bg ="rgb("+b1+","+b2+","+b3+")";


    
    let c1 = this.state.c1.toString()
    let c2 =this.state.c2.toString()
    let c3 =this.state.c3.toString()
    
       bg1 ="rgb("+c1+","+c2+","+c3+")";



    return {
      borderRadius: 1,
      backgroundColor: bg,
      flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          borderBottomColor: bg1,
          borderBottomWidth: 3,
          borderTopColor: bg1,
          borderTopWidth: 3,
          borderLeftColor: bg1,
          borderLeftWidth: 3,
          borderRightColor: bg1,
          borderRightWidth: 3,
    }
  }

  jewelStyle2 = ()=> {
    let b1= this.state.b1.toString()
    let b2= this.state.b2.toString()
    let b3= this.state.b3.toString()
    var bg ="rgb("+b1+","+b2+","+b3+")";
 
 
     
     let c1 = this.state.c1.toString()
     let c2 =this.state.c2.toString()
     let c3 =this.state.c3.toString()
     
        bg1 ="rgb("+c1+","+c2+","+c3+")";
 
 
 
     return bg1;
   }





  countStyle = ()=> {


    

    let c1= this.state.c1.toString()
    let c2= this.state.c2.toString()
    let c3= this.state.c3.toString()
    var bg1 ="";
  


   bg1 ="rgb("+c1+","+c2+","+c3+")";
    






    
     return {
       borderRadius: 1,
       
       padding:15,
           alignItems: 'center',
           justifyContent: 'space-around',
           borderBottomColor: bg1,
           borderBottomWidth: 3,
           borderTopColor: bg1,
           borderTopWidth: 3,
           borderLeftColor: bg1,
           borderLeftWidth: 3,
           borderRightColor: bg1,
           borderRightWidth: 3,
           fontSize:40
     }
   }






  render() {
      
    return (
      <View style={this.jewelStyle()}>

          
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style ={{marginBottom:3}}>Toggle the number of minutes</Text>
            <View style ={{flexDirection:"row"}}>
    <Text></Text>
            <Button title="-" disabled={this.state.default} style ={{padding:10}} color ={this.jewelStyle2()}  onPress = {this.countingSub}></Button><Text style = {{padding:10}}>         {this.state.time/60}          </Text>
            <Button disabled={this.state.default} color ={this.jewelStyle2()}  title="+" style ={{padding:10,width:20}} onPress ={this.countingAdd}></Button>
            </View>
          <Text>{this.state.notification.origin}</Text>
          <Text style ={{marginBottom:30}}></Text>
          <View>
    <Text style ={this.countStyle()}>{this.state.usertime}</Text>
    </View>
    <Text></Text>
  
<Text style={{fontWeight:"bold"}}>{this.state.title}</Text>

<Text style ={{width:220,textAlign:'center'}}>{this.state.description}</Text>

    
        </View>
        <Button  disabled={this.state.default} title= {'Start Timer'} onPress={this.startCount}  color ={this.jewelStyle2()} />
      </View>
    );
  }
}

