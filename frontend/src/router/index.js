import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';

const routes = [
  { path: '/', name: 'LoginForm', component: LoginForm },
  { path: '/signup', name: 'SignupForm', component: SignupForm },
  { path: '/users', name: 'Teste', component: LoginForm }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
