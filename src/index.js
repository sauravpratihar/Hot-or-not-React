import React from 'react';
import ReactDOM from 'react-dom';
import {App, Login, Register} from './App';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
// import Login from './App';
// import Register from './App';

ReactDOM.render(
     
    <BrowserRouter>
      <div>
        <Route path = "/" component = {App} />
        <Route path = "/login" component = {Login} /> 
        <Route path = "/register" component = {Register} />  
      </div>
   </BrowserRouter>,
  document.getElementById('root')
);
