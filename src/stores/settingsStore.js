import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import AuthService from '../services/auth-service.js';

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
    parentId(state){
      return state.settings.user._id;
    }
  },
  actions: {
    saveSessionData(data) {
      this.settings = data;
    },
    removeSessionData() {
      this.settings.isAuthenticated = false;
      this.settings.accessToken = '';
      this.settings.refreshToken = '';
      this.settings.user = {};
    },
    async refreshToken() {
      const response = await AuthService.refreshToken(
        this.settings.refreshToken,
      );
      if (response.status === 'success') {
        this.saveSessionData({ ...response, isAuthenticated: true });
      } else {
        this.removeSessionData();
      }
    },
  },
});
