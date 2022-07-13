import { defineStore } from 'pinia';
import { createKidsURL, kidsOfParentURL } from '../utils/endpoints.js';
import { callAPI } from '../utils/api-call';
import { useSettingStore } from '../stores/settingsStore';

export const useKidsStore = defineStore('kids', {
  state: () => ({
    kids: [],
  }),
  getters: {
    getKid: (state) => {
      return (kidId) => {
        const kid = state.kids.find((kid) => kid._id === kidId);
        return kid;
      };
    },
  },
  actions: {
    addChore(kidId, chore) {
      const id = this.kids.findIndex((kid) => kid._id === kidId);
      if (id === -1) {
        console.error(`User ID ${id} not found`);
      }
      this.kids[id].chores.push(chore);
    },
    async createKid(kid) {
      const parentSettings = useSettingStore();
      const payload = { ...kid, parentId: parentSettings.settings.user._id };
      const data = await callAPI(createKidsURL(), 'POST', true, payload);
      this.kids.push(data);
    },
    async loadKids() {
      const data = await callAPI(kidsOfParentURL(), 'GET', true, {});
      console.log('getKids', data);
      this.kids = [...data];
    },
  },
});
