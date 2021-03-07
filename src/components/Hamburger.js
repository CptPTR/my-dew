import React, {Component} from 'react';

import "./../resources/css/Hamburger.css";
import HamburgerMenu from "./HamburgerMenu";

class Hamburger extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hamburgerClicked: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        if (!this.state.hamburgerClicked) {
            this.setState({
                hamburgerClicked: true
            });
        } else {
            this.setState({
                hamburgerClicked: false
            });
        }
    }

    render() {
        return (
            <div className={"hamburger-container"}>
                <div className={this.state.hamburgerClicked? "cross" : "hamburger"} onClick={this.toggleMenu}>
                    <div />
                </div>
                <HamburgerMenu hbMenu={this.state.hamburgerClicked? "hamburger-menu" : "hamburger-menu-closed"} />
            </div>

        );
    }
}

export default Hamburger;;