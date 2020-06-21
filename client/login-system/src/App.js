import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'
import firebase from './componets/firebase';



class App extends React.Component{

  handleSigOut=()=>{
    firebase.auth().signOut().then(()=>console.log("signOut"));
    
  }
 
  render(){
  return (
    <div>
       <div>
    <Button onClick={this.handleSigOut} primary >singout</Button>
   
  </div>
    </div>
  );
}
}

export default App;
