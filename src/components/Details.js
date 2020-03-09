import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
// import { ButtonContainer } from './Button';
import { ButtonBTPContainer } from './Button';
import Title from './Title';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const { 
                        id,
                        company,
                        img,
                        info,
                        price,
                        title,
                        inCart
                    } = value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-deepOrange my-5">
                                <Title title={title}/>
                                </div>
                            </div>
                            {/* End title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto sol-md-6 text-center my-3 text-capitalize">
                                    <img src={img} className="img-fluid"  style={{width:'30rem',height:'25rem'}} alt="product"/>
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto text-center sol-md-6 my-3 text-capitalize">
                                    <h2>Name: {title}</h2>
                                    <h4 className="text-title text-uppercase text-center text-muted mt-3 mb-2">
                                        Made by: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue text-center">
                                        <strong>
                                            Price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize text-center font-weight-bold mt-3 mb-0">
                                        Info about Product
                                    </p>
                                    <p className="text-muted lead text-center">{info}</p>
                                    {/* Buttons */}
                                    <div>
                                        <Link to="/SpicesProductList">
                                            <ButtonBTPContainer>
                                                Back to Product
                                            </ButtonBTPContainer>
                                        </Link>
                                        <ButtonBTPContainer 
                                        cart
                                        className="ml-4" 
                                        disabled={inCart ? true : false} 
                                        onClick = {() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonBTPContainer>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}


