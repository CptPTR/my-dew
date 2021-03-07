import React from 'react';
import {Link} from "react-router-dom";

import "./../resources/css/Header.css";

import logo from "../resources/images/logo-DEW.png";

import NavigationBar from "./NavigationBar";
import Hamburger from "./Hamburger";
import ShopLanguage from "./ShopLanguage";
import Shipping from "./Shipping";


function Header(props) {
    return (
        <header>
            <Shipping/>
            <div className={"header-content"}>
                <Hamburger/>
                <NavigationBar/>
                <Link to={"/"}>
                    <img src={logo} alt={"logo"} className={"logo"} height={25}/>
                </Link>
                <ShopLanguage/>
            </div>
        </header>
    )
}

export default Header;