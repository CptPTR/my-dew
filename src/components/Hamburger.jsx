import { useState } from "react";
import "./../resources/css/Hamburger.css";
import HamburgerMenu from "./HamburgerMenu";

const Hamburger = () => {
  const [isHamburgerClicked, setHamburgerClicked] = useState(false);
  const toggleMenu = () => {
    setHamburgerClicked(!isHamburgerClicked);
  };
  return (
    <div className={"hamburger-container"}>
      <div
        className={isHamburgerClicked ? "cross" : "hamburger"}
        onClick={toggleMenu}
      >
        <div />
      </div>
      <HamburgerMenu
        hbMenu={isHamburgerClicked ? "hamburger-menu" : "hamburger-menu-closed"}
      />
    </div>
  );
};

export default Hamburger;
