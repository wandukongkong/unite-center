import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import LoginView from '../views/LoginView.vue';
import CheckView from '../views/CheckView.vue';
import RandomPickView from '../views/RandomPickView.vue';
import Circle from '../views/CircleView.vue';
import Board from '../views/BoardView.vue';
import PokemonDragCard from '@/components/PokemonDragCard.vue';

const isMobile = /(iPhone|iPad|Android|BlackBerry|Windows Phone)/i.test(navigator.userAgent);
const routes = [
  {
    path: '/',
    component: WelcomeView,
  },
  {
    path: '/login',
    component: LoginView,
    beforeEnter: (to, from, next) => {
      if (!isMobile) {
        next();
      }
    },
  },
  {
    path: '/check',
    component: CheckView,
    beforeEnter: (to, from, next) => {
      if (!isMobile) {
        next();
      }
    },
  },
  {
    path: '/randomPick',
    component: RandomPickView,
    beforeEnter: (to, from, next) => {
      next();
    },
  },
  {
    path: '/circle',
    component: Circle,
    beforeEnter: (to, from, next) => {
      if (!isMobile) {
        next();
      }
    },
  },
  {
    path: '/circle',
    component: Circle,
    beforeEnter: (to, from, next) => {
      if (!isMobile) {
        next();
      }
    },
  },
  {
    path: '/board',
    component: Board,
    beforeEnter: (to, from, next) => {
      if (!isMobile) {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
