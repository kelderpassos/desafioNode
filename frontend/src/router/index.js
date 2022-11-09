import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';
import Users from '../views/Users.vue'

const routes = [
  { path: '/', name: 'LoginForm', component: LoginForm },
  { path: '/signup', name: 'SignupForm', component: SignupForm },
  { path: '/users', name: 'Users', component: Users }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
