import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useSettingStore = defineStore('settingsStore', {
  state: () => {
    return {
      settings: useStorage('settings', []),
    };
  },
  getters: {
    isAuthenticated(state) {
      return state.settings.isAuthenticated || false;
    },
    accessToken(state) {
      return state.settings.accessToken || null;
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
    refreshToken() {
      this.settings.refreshToken
    }
  },
});
