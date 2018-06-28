import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import * as firebase from 'firebase';

 // Initialize Firebase
 /*const config = {
    apiKey: "AIzaSyCiWGdGZYIBOOsZn3nAGXYkf2z1y3XAXqc",
    authDomain: "tesa-be8bc.firebaseapp.com",
    databaseURL: "https://tesa-be8bc.firebaseio.com",
    projectId: "tesa-be8bc",
    storageBucket: "tesa-be8bc.appspot.com",
    messagingSenderId: "570476369526"
  };*/

  //firebase.initializeApp(config);


  ReactDOM.render(
    <Router>
      <App />
    </Router>, document.getElementById('root'));
registerServiceWorker();
