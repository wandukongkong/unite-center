import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "./bootstrap/css/bootstrap.min.css";

import PokemonCard from "./components/PokemonCard.vue";
import Versus from "./components/Versus.vue";

const app = createApp(App);
const pinia = createPinia();

app.component("PokemonCard", PokemonCard);
app.component("Versus", Versus);

app.use(router);
app.use(pinia);

app.mount("#app");
