import "./../resources/css/Footer.css";
import logoDEW from "./../resources/images/logo-DEW.png";
import PaymentOptions from "./PaymentOptions";
import SocialMedias from "./SocialMedias";

const Footer = () => {
  const footerNav = [
    "privacy",
    "terms",
    "shipping & returns",
    "warranty",
    "press kit",
  ];

  return (
    <footer>
      <div className={"footer-content"}>
        <div className={"footer-row reverse"}>
          <SocialMedias />
          <div className={"logo-DEW"}>
            <img width={320} height={55} src={logoDEW} alt="DEW logo" />
          </div>
        </div>
        <div className={"footer-row"}>
          <div className={"footer-nav"}>
            <ul>
              {footerNav.map((item, key) => (
                <li key={key}>
                  <a href="https://www.google.com">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <PaymentOptions />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
