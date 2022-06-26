import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Kids from '@/views/Kids.vue';
import Chores from '@/views/Chores.vue';
import Settings from '@/views/Settings.vue';
import KidSettings from '@/views/KidSettings.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/kids', name: 'Kids', component: Kids },
  { path: '/chores', name: 'Chores', component: Chores },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/kid-settings/:id', name: 'Kid-Settings', component: KidSettings },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
