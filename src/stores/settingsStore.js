import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useSettingStore = defineStore('settingsStore', {
  state: () => {
    return {
      settings: useStorage('settings', []),
      // isAuthenticated: false,
      // user: {
      //   name: 'Hilton',
      //   email: 'contact@hiltonmeyer.com',
      //   code: 1981,
      // },
    };
  },
  getters: {
    isAuthenticated(state) {
      return state.settings.isAuthenticated || false;
    },
  },
  actions: {
    login(data) {
      this.settings = data;
    },
    logout() {
      this.settings.isAuthenticated = false;
      this.settings.accessToken = '';
      this.settings.refreshToken = '';
      this.settings.user = {};
    },
  },
});
