import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer text-center">
                <div className="container">
                     <div className="row">
                        {/*column 1*/}
                        <div className="col">
                            <h4>-Indian Spices-</h4>
                            <ul className="list-unstyled">
                            <li>Indian Spices is an online Website,</li>
                            <li>We also have a 300 sq.mt. shop in Heidelberg, Germany</li>
                            <li> where we welcome everyone!</li>
                        </ul>
                        </div>
                        {/*column 2*/}
                        <div className="col">
                        <h4>-Products-</h4>
                        <ul className="list-unstyled">
                            <li>Basmati Rice, Organic Rice </li>
                            <li>Spices,Herbs,Sauces ,Cooking Oils</li>
                            <li>Snacks,Nuts and Dry Fruit</li>
                        </ul>
                        </div>
                        {/*column 3*/}
                        <div className="col">
                        <h4>-Popular Brand-</h4>
                        <ul className="list-unstyled">
                            <li>Annam,TRS,Natco</li>
                            <li>Kohinoor,Ashoka,</li>
                            <li>Aashirvaad,TR,Gits,MDH,Shan</li>
                            <li>Britannia,Haldiram’s,</li>
                        </ul>
                        </div>
                        {/*column 4*/}
                        <div className="col">
                        <h4>-Contact Us-</h4>
                        <ul className="list-unstyled">
                            <li>Bonhoeffer Straße 9, Heidelberg,</li>
                            <li>-Call-</li>
                            <li>+49 15 1667 7330</li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="text">
                    <img src="/img/visa.png" alt="not found" className="climg"></img>
                    <img src="/img/paypal.png" alt="not found" className="climg"></img>
                    <img src="/img/mc.png" alt="not found" className="climg"></img>
                    <img src="/img/Klarna.png" alt="not found" className="climg"></img>
                    </div>
                    </div>
                </div>
            </footer>
        );
    }

}
export default Footer;
