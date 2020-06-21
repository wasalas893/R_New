import React from 'react';
import {Grid,
    Form,
    Button,
    Header,
    Message,
 } from 'semantic-ui-react';
import {Link } from 'react-router-dom';
import firebase from './firebase';
    
class login extends React.Component{

    state={
        email:"",
        password:""
    }

    handleChange=event=>{
        this.setState({ [event.target.name]:event.target.value })
    };

    handleSubmit=event=>{
        event.preventDefault();
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(signedInUser=>{
            console.log(signedInUser);
        }) 
        .catch(err=>{
            console.error(err);
            

    });

    };

    render(){
        const {email,password}=this.state;
        
        return(
            <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column style={{ maxWidth: 450 }}>
           <Header as="h2"  textAlign="center">
         
              Login
           </Header>
 
           <Form onSubmit={this.handleSubmit} size="large" >
            
            
 
               <Form.Input
                 fluid
                 name="email"
                 placeholder="Email Address"
                 onChange={this.handleChange}
                 value={email}
                 type="email"
               />
 
               <Form.Input
                 fluid
                 name="password"
                 placeholder="Password"
                 onChange={this.handleChange}
               
                 value={password}
                 type="password"
               />
 
               <Button  color="primary" fluid size="large">
                 Submit
               </Button>
           
           </Form>
           <Message>
             Already a user? <Link to="/register">register</Link>
           </Message>
         </Grid.Column>
       </Grid>
        );
    }
}
export default login;