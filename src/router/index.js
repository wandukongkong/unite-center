import { createRouter, createWebHistory } from "vue-router";
import WelcomeLayout from "../views/WelcomeLayout.vue";
import LoginLayout from "../views/LoginLayout.vue";

const routes = [
  {
    path: "/",
    component: WelcomeLayout,
  },
  {
    path: "/login",
    component: LoginLayout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
