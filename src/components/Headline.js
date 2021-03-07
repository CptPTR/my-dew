import React from "react";

import Slider from "react-slick";

import "./../resources/css/Headline.css";

import { useTranslation } from "react-i18next";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

function Headline(props) {
  const { t } = useTranslation();

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    pauseOnHover: false,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return (
    <div className={"headline"}>
      <Slider {...settings}>
        <div className={"slider-item"}>
          <img src={t("Verge_img")} alt="" />
          <div className={"item-content"}>
            <h1>{t("Verge")}</h1>
            <h2>{t("Verge_desc")}</h2>
            <button>
              {t("Verge_btn")}
              <svg
                className="svg-inline--fa fa-chevron-right fa-w-10"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569
                                            9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484
                                            101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373
                                            33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={"slider-item"}>
          <img src={t("Avail_img")} alt="" />
          <div className={"item-content"}>
            <h1>{t("Avail")}</h1>
            <h2>{t("Avail_desc")}</h2>
            <button>
              {t("Avail_btn")}
              <svg
                className="svg-inline--fa fa-chevron-right fa-w-10"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569
                                            9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484
                                            101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373
                                            33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={"slider-item"}>
          <img src={t("Kickstarter_DryBag_img")} alt="" />
          <div className={"item-content"}>
            <h1>{t("Kickstarter_DryBag")}</h1>
            <h2>{t("Kickstarter_DryBag_desc")}</h2>
            <button>
              {t("Kickstarter_DryBag_btn")}
              <svg
                className="svg-inline--fa fa-chevron-right fa-w-10"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569
                                            9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484
                                            101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373
                                            33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                />
              </svg>
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Headline;
