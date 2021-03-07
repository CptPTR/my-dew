import React, { Component } from "react";

import "./../resources/css/Footer.css";

import logoDEW from "./../resources/images/logo-DEW.png";

import SocialMedias from "./SocialMedias";
import PaymentOptions from "./PaymentOptions";

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      footerNav: [
        "privacy",
        "terms",
        "shipping & returns",
        "warranty",
        "press kit",
      ],
      paymentOptions: [],
    };
  }

  render() {
    return (
      <footer>
        <div className={"footer-content"}>
          <div className={"footer-row reverse"}>
            <SocialMedias />
            <div className={"logo-DEW"}>
              <img width={320} height={55} src={logoDEW} alt="DEW logo" />
            </div>
          </div>
          <div className={"footer-row"}>
            <div className={"footer-nav"}>
              <ul>
                {this.state.footerNav.map((item, key) => (
                  <li key={key}>
                    <a href="https://www.google.com">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <PaymentOptions />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
