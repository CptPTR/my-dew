import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import hlVerge from "./resources/images/headline/headline-dew-1.jpg";
import hlAvail from "./resources/images/headline/headline-dew-2.jpg";
import hlKickstarter from "./resources/images/headline/headline-dew-3.jpg";

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          Kickstarter: "kickstarter",
          Shop: "shop",
          About: "about",
          News: "news",
          Contact: "contact",
          Verge: "verge",
          Verge_desc: "Made in the city for the city",
          Verge_btn: "Shop Verge",
          Verge_img: hlVerge,
          Avail: "Avail",
          Avail_desc: "A drybag you actually want to carry",
          Avail_btn: "Shop Avail",
          Avail_img: hlAvail,
          Kickstarter_DryBag: "A dry bag with attitude",
          Kickstarter_DryBag_desc: "45% discount on Kickstarter now!",
          Kickstarter_DryBag_btn: "Go to Kickstarter",
          Kickstarter_DryBag_img: hlKickstarter,
        },
      },
      nl: {
        translations: {
          Kickstarter: "kickstarter",
          Shop: "shop",
          About: "over ons",
          News: "nieuws",
          Contact: "contact",
          Verge: "verge",
          Verge_desc: "Gemaakt in de stad voor de stad.",
          Verge_btn: "Shop Verge",
          Verge_img: hlVerge,
          Avail: "Avail",
          Avail_desc: "100% waterdicht én stijlvol.",
          Avail_btn: "Shop Avail",
          Avail_img: hlAvail,
          Kickstarter_DryBag: "100% waterdicht én sexy",
          Kickstarter_DryBag_desc: "35% korting via Kickstarter!",
          Kickstarter_DryBag_btn: "Ga naar Kickstarter",
          Kickstarter_DryBag_img: hlKickstarter,
        },
      },
      de: {
        translations: {
          Kickstarter: "kickstarter",
          Shop: "shop",
          About: "über uns",
          News: "news",
          Contact: "kontakt",
          Verge: "verge",
          Verge_desc: "Gemacht in der stadt für die stadt",
          Verge_btn: "Shop Verge",
          Verge_img: hlVerge,
          Avail: "Avail",
          Avail_desc: "100% wasserdicht und stilvoll",
          Avail_btn: "Shop Avail",
          Avail_img: hlAvail,
          Kickstarter_DryBag: "100% wasserdicht und sexy",
          Kickstarter_DryBag_desc: "35% rabatt über Kickstarter!",
          Kickstarter_DryBag_btn: "Gehe zu Kickstarter",
          Kickstarter_DryBag_img: hlKickstarter,
        },
      },
    },
    debug: false,
    ns: "translations",
    defaultNS: "translations",
    lng: "nl",
    fallbackLng: ["nl", "en", "de"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
