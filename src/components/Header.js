import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonLRContainer } from './Button';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav `
    background: transparent;

    .nav-link {
        color: white;
        font-size: 3rem; 
        font-style: italic;
        font-weight: bold;
        text-transform: capitalize;

        .ul:hover {
            background-color: #111
        }
    }

    .size {
     float: left;
     width: 180px;
     height: 110px;
    }

    .fontEffect {
        font-size: 21px;
        color: var(--deepOrange);
        /* font-style:italic; */
        font-weight: bold;
    }

    .left {
        margin-left: 190px;
    }
`

export default function Header() {
    return (
        <NavWrapper className="navbar navbar-expand-sm px-sm-5 mt-50">      

            <label className= "fontEffect">+4915124429654 <br/> indian-spices@gmail.com</label> 

            <ul className="navbar-nav">
                <li className=" text-logo-font left ">
                        ~Indian Spices~
                </li>
            </ul>  
            <Link to="/login" className="ml-auto">
                <ButtonLRContainer>
                <span className="mr-2">Login/ Registration</span>
                </ButtonLRContainer>
            </Link>
        </NavWrapper>  
    )
}

