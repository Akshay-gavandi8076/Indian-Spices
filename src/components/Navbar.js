import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeIcon from "../home.svg";
// import home from './Home';
import styled from 'styled-components';
import { ButtonContainer } from './Button';


const NavWrapper = styled.nav `
    background: var(--deepOrange);

    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem; 
        text-transform: capitalize;

        .ul:hover {
            background-color: #111
        }
    }
`

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 mt-50">
            <Link to="/">
                <img src={homeIcon} alt="BackToHome" className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item  ml-5">
                    <Link to="/SpicesProductList" className="nav-link">
                        Spices
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                <span className="mr-2">
                <i className=" fas fa-cart-plus"/>{' '}
                    {/* <img src={ShoppingCart} alt="Shopping Cart"/>{' '} */}
                    My cart 
                    </span>
                </ButtonContainer>
            </Link>
        </NavWrapper>  
        );
    }
}

