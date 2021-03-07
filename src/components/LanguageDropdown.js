import React from 'react';
import {useTranslation} from "react-i18next";

import "./../resources/css/LanguageDropdown.css";

function LanguageDropdown(props) {
    const { i18n } = useTranslation();

    return (
        <ul>
            {
                i18n.languages.slice(1 , i18n.languages.length).map((language, key) =>
                    <li key={key} className={"lang-button"}>
                        <span onClick={() => {
                            i18n.changeLanguage(language);
                        }}>
                            { language }
                        </span>
                    </li>
                )
            }
        </ul>
    );
}

export default LanguageDropdown;