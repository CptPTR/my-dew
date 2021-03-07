import React from 'react';

import "./../resources/css/NavigationBar.css";
import {useTranslation} from "react-i18next";

import {Link} from "react-router-dom";

function NavigationBar(props) {
    const {t} = useTranslation();

    return (
        <nav>
            <ul>
                <Link to={"/kickstarter"}>
                    <li>
                        {t("Kickstarter")}
                    </li>
                </Link>
                <Link to={"/shop"}>
                    <li>
                        {t("Shop")}
                    </li>
                </Link>
                <Link to={"/about"}>
                    <li>
                        {t("About")}
                    </li>
                </Link>
                <Link to={"/news"}>
                    <li>
                        {t("News")}
                    </li>
                </Link>
                <Link to={"/contact"}>
                    <li>
                        {t("Contact")}
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavigationBar;