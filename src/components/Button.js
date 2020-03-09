
import styled from 'styled-components';

export const ButtonContainer = styled.button`
/*   position: relative;
     background: #4CAF50;
     width: 150px;
     border: none;
     color: white;
     margin: auto;
     float:right;
     padding: 10px;
     margin-right:-200px;
     margin-top: 50px;
     cursor: pointer; */
text-transform:capitalize;
width: 150px;
font-size: 1.4rem;
background:transparent;
border:0.1rem solid var(--lightDeepOrange);
border-color: ${ props => 
    props.cart ? "var(--mainYellow)" : "var(--lightDeepOrange)"};
color: ${ props => 
    props.cart ? "var(--mainYellow)" : "var(--lightDeepOrange)"};
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
}`