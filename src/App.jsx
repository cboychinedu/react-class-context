// Importing the necessary modules 
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import React, { Component, Fragment } from 'react';
import { AuthContextProvider } from './contexts/AuthContext';


// Creating the class component 
class App extends Component {
  // State 
  state = {} 

  // Rendering 
  render() {
    // Return the jsx 
    return(
      <Fragment>
          <AuthContextProvider> 
            {/* Adding the Login, and Register Component */}
            <Login /> 
            <Register /> 
          </AuthContextProvider>
      </Fragment>
    )
  }
}

// Exporting the App component 
export default App;


