import React, { Component } from "react";

import "./../resources/css/ShopLanguage.css";
import CurrentLanguage from "./CurrentLanguage";
import LanguageDropdown from "./LanguageDropdown";

class ShopLanguage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            changeLang: false
        };

        this.openLangDropdown = this.openLangDropdown.bind(this);
        this.closeLangDropdown = this.closeLangDropdown.bind(this);
    }

    openLangDropdown() {
        if (!this.state.changeLang) {
            this.setState({
                changeLang: true
            });
            document.addEventListener("click", this.closeLangDropdown, false);
        } else {
            this.setState({
                changeLang: false
            });
            document.removeEventListener("click", this.closeLangDropdown, false);
        }
    }

    closeLangDropdown(e) {
        if (this.node.contains(e.target)){
            return;
        }

        this.openLangDropdown();
    }

    render() {
        return (
            <div className={"shop-language"}>
                <div className={"shop"}>
                    <a href="/shop">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.94 60.53" className={"shop-icon"}>
                            <g>
                                <path d="M26.13,60.53a6.36,6.36,0,1,1,6.36-6.36A6.36,6.36,0,0,1,26.13,60.53Zm0-8.72a2.36,2.36,0,
    1,0,2.36,2.36A2.36,2.36,0,0,0,26.13,51.81Z"/>
                                <path d="M54.54,60.53a6.36,6.36,0,1,1,6.37-6.36A6.37,6.37,0,0,1,54.54,60.53Zm0-8.72a2.36,2.36,0,
    1,0,2.37,2.36A2.36,2.36,0,0,0,54.54,51.81Z"/>
                                <path d="M14.55,8l-.46-1.36A9.65,9.65,0,0,0,4.93,0H0V4H4.93A5.65,5.65,0,0,1,10.3,7.86l10.8,
    32a9.66,9.66,0,0,0,9.16,6.58H59.52v-4H30.26a5.67,5.67,0,0,1-5.37-3.85l0-.09h29.6A11.32,11.32,0,
    0,0,65,31.29L73.94,8ZM61.24,29.86a7.31,7.31,0,0,1-6.78,4.66H23.51L15.9,12H68.12Z"/>
                            </g>
                        </svg>
                    </a>
                </div>
                <div className={"language-dropdown"}>
                    <div onClick={this.openLangDropdown} className={"language-dropdown-anchor"}>
                        <CurrentLanguage />
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.424" height="7.334" viewBox="0 0 10.424 7.334" className={"dropdown-icon"}>
                            <path id="Path_615" data-name="Path 615" d="M6442.89,631.5l4.152,4.152,4.151-4.152" transform="translate(-6441.83 -630.439)" fill={"none"} stroke={"#000"} strokeWidth={"3"}/>
                            <script xmlns=""/></svg>
                    </div>
                    <div ref={node => {this.node = node}} className={this.state.changeLang ? "language-dropdown-list" : "language-dropdown-list-hidden"}>
                        <LanguageDropdown />
                    </div>
                </div>
            </div>
        );
    }


}

export default ShopLanguage;