import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import LoginView from '../views/LoginView.vue';
import CheckView from '../views/CheckView.vue';
import RandomPickView from '../views/RandomPickView.vue';

const routes = [
  {
    path: '/',
    component: import('../views/WelcomeView.vue'),
  },
  {
    path: '/login',
    component: import('../views/LoginView.vue'),
  },
  {
    path: '/check',
    component: import('../views/CheckView.vue'),
  },
  {
    path: '/randomPick',
    component: import('../views/RandomPickView.vue'),
  },
  {
    path: '/circle',
    component: import('../views/CircleView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
