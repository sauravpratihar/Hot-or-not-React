import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Login.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h2>Welcome to Hot OR Not</h2>
           

        </div>
        {/* <Login /> */}

        {/* <Register /> */}
      </div>
    );
  }
}

// Constant Login
class Login extends Component {
  render() {
    return (
      <div className='login'>
        <form>
          <div className="container">

            <label />Email ID:
            <input type="text" placeholder="Enter Email ID" name="email" required />

            <label />Password:
            <input type="password" placeholder="Enter Password" name="password" required />
                  
            <input type="submit" value="Login" />
              
          </div>
            
        </form>
      </div>
    )
  }
}

// Register
class Register extends Component{
  render(){
    return (
      <div className='login'>
        <form>
          <div className="container">

            <label />Name:
            <input type="text" placeholder="Enter Name" name="name" required />

            <label />Email ID:
            <input type="text" placeholder="Enter Email ID" name="email" required />

            <label />Password:
            <input type="password" placeholder="Enter Password" name="password" required />

            <label />Re-Enter Password:
            <input type="password" placeholder="Enter Password" name="password" required />
                  
            <input type="submit" value="Register" />
              
          </div>
            
        </form>
      </div>
    )
  }
}




module.exports = {
  App,
  Login,
  Register
};
