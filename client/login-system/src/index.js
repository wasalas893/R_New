import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Switch,Route,withRouter, BrowserRouter} from 'react-router-dom';

import "semantic-ui-css/semantic.min.css";

import login from './componets/login';
import register from './componets/register';
import firebase from './componets/firebase';

class Root extends React.Component{
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
        if(user){
            console.log(user);

          
            this.props.history.push("/");
        }else{
            this.props.history.push('/login');
         
        }
    })

}
  render(){
    return(

    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/login" component={login} />
      <Route  exact path="/register" component={register}/>
    </Switch>

    );
  }

};
const Rootwith=withRouter(Root);

ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Rootwith />
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
