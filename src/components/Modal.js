import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonBTPContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-lg-6 text-center text-capitalize p-5">
                                        <h5>Item added to the cart</h5>
                                        <img src={img} className="img-fluid"  style={{width:'15rem',height:'15rem'}} alt="Product"/>
                                        <h5 className="mt-5" >{title}</h5>
                                        <h5 className="text-muted">price : $ {price} </h5>
                                        <Link to="/SpicesProductList">
                                            <ButtonBTPContainer onClick={() => closeModal() } >
                                                Continue
                                            </ButtonBTPContainer>
                                        </Link>
                                        <Link to="/cart" className="ml-5">
                                            <ButtonBTPContainer cart onClick={() => closeModal() } >
                                                Go to cart
                                            </ButtonBTPContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        )
    }
}


const ModalContainer = styled.div` 
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;

#modal {
    background: var(--mainWhite);
}
`