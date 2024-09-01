import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { faEquals } from "@fortawesome/free-solid-svg-icons";
import { faSquarePollHorizontal } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUpLong, faArrowDownLong, faEquals, faSquarePollHorizontal, faArrowDownWideShort, faArrowUpWideShort);

import App from "./App.vue";
import router from "./router/routes";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
