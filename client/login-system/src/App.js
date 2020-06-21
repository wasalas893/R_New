import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'



class App extends React.Component{
 
  render(){
  return (
    <div>
       <div>
    <Button primary >singout</Button>
    <Button secondary>Secondary</Button>
  </div>
    </div>
  );
}
}

export default App;
