import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends Component{
    render(){
        return(
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handelSubmit}>

            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your Full name" name="name"/>
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
            </div>

            <div className="FormField">
            <label className="FormField__CheckboxLabel">
                <input className="FormField__CheckboxLabel" type="checkbox" name="hasAgreed"/> I agree all statements in <a href="" className="FormField__TermsLink">terms of services</a>
            </label>
            </div>

            <div className="FormField">
                <button className="FormField__Button mr-20" >Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member </Link>
            </div>

            </form> 
          </div>
        );
    }

}
export default SignUpForm;