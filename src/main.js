import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vue3Lottie from 'vue3-lottie';
import piniaPersist from 'pinia-plugin-persist';

import App from './App.vue';
import router from './router';

import 'bootstrap';
import './bootstrap/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import PokemonCard from './components/PokemonCard.vue';
import Versus from './components/Versus.vue';
import Header from './components/Header.vue';

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPersist);

app.component('PokemonCard', PokemonCard);
app.component('Versus', Versus);
app.component('Header', Header);

app.use(router);
app.use(pinia);
app.use(Vue3Lottie);

app.mount('#app');
