import React, { Component } from 'react';
import './PersonalDetails.css';


class PersonalDetails extends Component{
    render(){
        return(
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handelSubmit}>

            <h2 className="head">Customer Details</h2>

            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your Full name" name="name"/>
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="address">Address</label>
                <input type="text" id="address" className="FormField__Input" placeholder="Enter your Address" name="address"/>
            </div>

            <div className="FormField">
                <label className="FormField__Label" htmlFor="number">Mobile No</label>
                <input type="number" id="number" className="FormField__Input" placeholder="Enter your Mobile No" name="number"/>
            </div>

            <div className="FormField">
            <label className="FormField__CheckboxLabel">
                <input className="FormField__CheckboxLabel" type="checkbox" name="hasAgreed"/> Cash On Delievery </label>
            </div>

            <div className="FormField">
                <button className="FormField__Button" >Submit</button> 
            </div>

            </form> 
          </div>
        );
    }

}
export default PersonalDetails;
