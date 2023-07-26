import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./../resources/css/NavigationBar.css";

function NavigationBar(props) {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <Link to="/">{t("Home")}</Link>
        <Link to="/kickstarter">{t("Kickstarter")}</Link>
        <Link to="/shop">{t("Shop")}</Link>
        <Link to="/about">{t("About")}</Link>
        <Link to="/news">{t("News")}</Link>
        <Link to="/contact">{t("Contact")}</Link>
      </ul>
    </nav>
  );
}

export default NavigationBar;
