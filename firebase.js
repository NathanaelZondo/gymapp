import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyDTlANagHhuttkFZBO2jkiwmKXCr4uhFWM",
    authDomain: "tefo-shop.firebaseapp.com",
    databaseURL: "https://tefo-shop.firebaseio.com",
    projectId: "tefo-shop",
    storageBucket: "tefo-shop.appspot.com",
    messagingSenderId: "68802881616",
    appId: "1:68802881616:web:6fd0e52c6dde106ce94955",
    measurementId: "G-2QJ5JQXVWY"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();