import React from "react";
import { useTranslation } from "react-i18next";

import "./../resources/css/CurrentLanguage.css";

function CurrentLanguage(props) {
  const { i18n } = useTranslation();

  return <span className={"current-language"}>{i18n.language}</span>;
}

export default CurrentLanguage;
