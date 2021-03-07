import React from 'react';

import "./../resources/css/HamburgerMenu.css";

function HamburgerMenu(props) {
    return (
        <div className={props.hbMenu}>
            <ul>
                <li><a href="https://www.google.com">kickstarter</a></li>
                <li><a href="https://www.google.com">shop</a></li>
                <li><a href="https://www.google.com">about</a></li>
                <li><a href="https://www.google.com">news</a></li>
                <li><a href="https://www.google.com">contact</a></li>
            </ul>
        </div>
    );
}

export default HamburgerMenu;