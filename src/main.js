import { createApp } from "vue";
import "./assets/scss/app.scss";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// NAVBAR
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

//  HEADER RIGHTTOP
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

// SOCIAL
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
  faRulerCombined,
  faLifeRing,
  faBook,
  faSquareFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
