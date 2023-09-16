import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import LoginView from '../views/LoginView.vue';
import CheckView from '../views/CheckView.vue';
import RandomPickView from '../views/RandomPickView.vue';

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
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
