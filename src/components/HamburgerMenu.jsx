import { Link } from "react-router-dom";
import "./../resources/css/HamburgerMenu.css";
import { useTranslation } from "react-i18next";

function HamburgerMenu(props) {
  const { t } = useTranslation();

  return (
    <div className={props.hbMenu}>
      <ul>
        <Link to="/">{t("Home")}</Link>
        <Link to="/kickstarter">{t("Kickstarter")}</Link>
        <Link to="/shop">{t("Shop")}</Link>
        <Link to="/about">{t("About")}</Link>
        <Link to="/news">{t("News")}</Link>
        <Link to="/contact">{t("Contact")}</Link>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
