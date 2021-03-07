import React from 'react';

import "./../resources/css/PaymentOptions.css";

import bancontactMisterCash from "./../resources/images/paymentOptions/bancontact-mister-cash.svg";
import visa from "./../resources/images/paymentOptions/visa.svg";
import mastercard from "./../resources/images/paymentOptions/mastercard.svg";
import maestro from "./../resources/images/paymentOptions/maestro.svg";
import belfius from "./../resources/images/paymentOptions/belfius.svg";
import kbc from "./../resources/images/paymentOptions/kbc.svg";
import sofort from "./../resources/images/paymentOptions/sofort.svg";
import giropay from "./../resources/images/paymentOptions/giropay.svg";
import iDeal from "./../resources/images/paymentOptions/iDeal.svg";
import ing from "./../resources/images/paymentOptions/ing.svg";

function PaymentOptions(props) {
    const paymentOptions = [
        bancontactMisterCash, visa, mastercard, maestro, belfius, kbc, sofort, giropay, iDeal, ing
    ];

    return (
        <div className={"payment-options"}>
            <ul>
                {
                    paymentOptions.map((pOptions, key) =>
                        <li key={key}>
                            <img className={"payment-options-item"} src={pOptions} alt="Payment Option"/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default PaymentOptions;