// Importing the necessary modules 
import React, { Component, createContext, Fragment } from 'react';

// Creating the AuthContext object 
const AuthContext = createContext(); 

// Creating the class AuthContextProvider 
class AuthContextProvider extends Component {
    // Setting the Auth State 
    state = {
        isLoggedIn: false, 
        xAuthToken: null
    }

    // Rendering the AuthContextProvider 
    render() {
        return(
            <Fragment>
                <AuthContext.Provider value={{...this.state}} >
                    { this.props.children }
                </AuthContext.Provider>
            </Fragment>
        )
    }
}

// Exporting the AuthContext, and AuthContextProvider 
export {
    AuthContext, 
    AuthContextProvider
}