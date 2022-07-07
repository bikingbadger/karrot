import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Kids from '@/views/Kids.vue';
import Chores from '@/views/Chores.vue';
import Settings from '@/views/Settings.vue';
import KidSettings from '@/views/KidSettings.vue';
import Login from '@/views/Login.vue';
import Logout from '@/views/Logout.vue';

import { useSettingStore } from '../stores/settingsStore.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/kids',
    name: 'Kids',
    component: Kids,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/chores',
    name: 'Chores',
    component: Chores,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/kid-settings/:_id',
    name: 'Kid-Settings',
    component: KidSettings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  console.log('before route');
  const settings = useSettingStore();
  // Check to see if we need to check authenticated route
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log('needs auth check', settings.isAuthenticated);
    // If user isn't authenticated then redirect to login screen
    if (settings.isAuthenticated) {
      next();
    } else {
      next('/login');
    }
  } else {
    console.log('no need for auth check');
    // else simply move to the view we want as the user is authenticated
    next();
  }
});

export default router;
