import { useTranslation } from "react-i18next";
import "./../resources/css/CurrentLanguage.css";

const CurrentLanguage = () => {
  const { i18n } = useTranslation();

  return <span className={"current-language"}>{i18n.language}</span>;
};

export default CurrentLanguage;
