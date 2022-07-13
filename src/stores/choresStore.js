import { defineStore } from 'pinia';
import { allChoresURL } from '../utils/endpoints';
import { callAPI } from '../utils/api-call';

export const useChoresStore = defineStore('chores', {
  state: () => ({
    chores: [],
  }),
  getters: {
    getChore: (state) => {
      return (choreId) => {
        return state.chores.find((chore) => chore._id === choreId);
      };
    },
  },
  actions: {
    async getChores() {
      const data = await callAPI(allChoresURL(), 'GET', true, {});
      console.log('getChores', data);
      this.chores = [...data];
    },
  },
});
