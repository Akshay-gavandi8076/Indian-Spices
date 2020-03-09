import React, { Component } from 'react';
import SpicesProduct from './SpicesProduct';
import Title from './Title';
// import { storeSpicesProducts } from '../data';
import { ProductConsumer } from '../context';

export default class SpicesProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title title="Spice products"/>
                        
                        <div className="row">
                            <ProductConsumer>
                                {(value) =>{
                                    return value.products.map( product => {
                                        return <SpicesProduct key={product.id} product={product}/>;
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ); 
    }
}
