// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// Creating the class component 
class Login extends Component {
  // Getting the context 
  static contextType = AuthContext; 

  // State 
  state = {} 

  // Rendering 
  render() {
    const { isLoggedIn } = this.context;
    console.log(this.context); 

    // Return the jsx 
    return(
      <Fragment>
         <p> Login Component </p>

         <p> Online Status: {isLoggedIn? "User Online": "User Offline"}</p>

         <button> Login Button </button>
      </Fragment>
    )
  }
}

// Exporting the Login component 
export default Login;


