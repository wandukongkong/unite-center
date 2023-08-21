import { createRouter, createWebHistory } from "vue-router";
import WelcomeLayout from "../views/WelcomeLayout.vue";

const routes = [
  {
    path: "/",
    component: WelcomeLayout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
