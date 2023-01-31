import { createApp } from "vue";
import "@fontsource/montserrat";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faPlus,
  faMinus,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";

library.add(
  faBars,
  faPlus,
  faMinus,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faChevronUp
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
