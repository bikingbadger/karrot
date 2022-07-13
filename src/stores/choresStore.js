import { defineStore } from 'pinia';
import { allChoresURL } from '../utils/endpoints';
import { authHeader } from '../utils/auth-header.js';

export const useChoresStore = defineStore('chores', {
  state: () => ({
    chores: [],
  }),
  getters: {
    getChore: (state) => {
      return (choreId) => {
        return state.chores.find((chore) => chore.id === choreId);
      };
    },
  },
  actions: {
    async getChores() {
      console.log('getChores', allChoresURL());
      const result = await fetch(allChoresURL(), {
        method: 'GET',
        headers: authHeader(),
      });

      // If 403 need to regenerate token or login again
      if (result.status === 403) {
        const settings = useSettingStore();
        console.log('getChores', 'refresh token');
        settings.refreshToken();
        return;
      }

      const data = await result.json();
      console.log('getChores', data);
      this.chores = [...data];
    },
  },
});
