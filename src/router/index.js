import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Kids from '@/views/Kids.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/kids', name: 'Kids', component: Kids },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
