import React, { Component } from 'react'
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import './Login.css';



class Login extends Component {
    render(){
    return (
    <Router>
        <div className="Login">
        <div className="Login__Form">

        <div className="PageSwitcher">
            <NavLink exact to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink  to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
        </div>

        <div className="FormTitle">
            <NavLink exact to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
        </div>
        <Route path="/sign-in" component={SignInForm} >
          </Route>
        
        <Route path="/sign-up" component={SignUpForm}>
        </Route>
        </div>
      </div>
    </Router>
    );
 }
}
export default Login;
