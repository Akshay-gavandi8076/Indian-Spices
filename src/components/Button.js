
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    width: 150px;
    font-size: 1.4rem;
    background:transparent;
    border-radius: 25px;
    border:none;
    color: white;
    padding: 5px;
    cursor:pointer;
    margin: 0.2rem, 0.5rem, 0.2rem, 0;
    transition: all 0.5s ease-in-out;

    &:hover {
        background: ${ props => 
        props.cart ? "var(--mainYellow)" : "var(--lightDeepOrange)"};
        color: black;

    &:focus {
        outline: none;
    }
    }
`

export const ButtonLRContainer = styled.button`
    text-transform:capitalize;
    color: white;
    width: 190px;
    height: 50px;
    padding-left:15px;
    font-size: 1.2rem;
    background:var(--deepOrange);
    cursor:pointer;
    transition: all 0.5s ease-in-out;
    border-radius: 25px;
    border:none;

    &:hover {
        background: var(--lightDeepOrange);
        color: black;
        }
`

export const ButtonBTPContainer = styled.button`
    text-transform:capitalize;
    border-radius: 25px;
    width: 190px;
    font-size: 1.4rem;
    background:transparent;
    border:0.1rem solid var(--lightDeepOrange);
    color:var(--lightDeepOrange);
    padding: 5px;
    cursor:pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
        background:var(--lightDeepOrange);
        color: black;
    }
`