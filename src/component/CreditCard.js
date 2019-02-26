import React, { Component } from 'react';
import './creditCard.css'

class CreditCard extends Component {
    render() {
        return (
            <div>
                <div className="sq-payment-formm">
                    <div id="sq-ccboxx">
                        <form className="frmtest" id="nonce-form" novalidate="novalidate" action="process-payment" method="post">
                            
                                <div id="sq-card-number" className="sq-card-number"></div>
                                    <div id="sq-cvv" className="sq-cvv"></div>
                                
                                
                                    <div id="sq-expiration-date" className="sq-expiration-date"></div>
                                
                                
                                    <div id="sq-postal-code" className="sq-postal-code"></div>
                                
                            
                            
                                <button className="btn btn-primary sq-button" id="sq-creditcard" onclick="requestCardNonce(event)">Pay $1.00 Now
                                </button>
                            
                            <div id="error"></div><input type="hidden" id="card-nonce"  name="nonce" /></form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreditCard;