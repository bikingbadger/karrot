import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Kids from '@/views/Kids.vue';
import Chores from '@/views/Chores.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/kids', name: 'Kids', component: Kids },
  { path: '/chores', name: 'Chores', component: Chores },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
