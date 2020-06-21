import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyBOM9ezhbSdA1U-_yJmzuQmSN2-6mCcl6k",
    authDomain: "login-17989.firebaseapp.com",
    databaseURL: "https://login-17989.firebaseio.com",
    projectId: "login-17989",
    storageBucket: "login-17989.appspot.com",
    messagingSenderId: "207306236766",
    appId: "1:207306236766:web:cc5a75f84f0f4a21af65cf",
    measurementId: "G-CD4S2V5CJ7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;