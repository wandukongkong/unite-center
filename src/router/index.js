import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import LoginView from '../views/LoginView.vue';
import CheckView from '../views/CheckView.vue';
import RandomPickView from '../views/RandomPickView.vue';
import Circle from '../views/CircleView.vue';
import Board from '../views/BoardView.vue';

const routes = [
  {
    path: '/',
    component: WelcomeView,
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/check',
    component: CheckView,
  },
  {
    path: '/randomPick',
    component: RandomPickView,
  },
  {
    path: '/circle',
    component: Circle,
  },
  {
    path: '/circle',
    component: Circle,
  },
  {
    path: '/board',
    component: Board,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
