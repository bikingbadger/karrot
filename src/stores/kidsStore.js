import { defineStore, storeToRefs } from 'pinia';
import { createKidsURL, kidsOfParentURL } from '../utils/endpoints.js';
import { authHeader } from '../utils/auth-header.js';
import { useSettingStore } from '../stores/settingsStore';

export const useKidsStore = defineStore('kids', {
  state: () => ({
    counter: 0,
    kids: [],
  }),
  getters: {
    getKid: (state) => {
      return (kidId) => {
        console.log(state.kids);
        const kid = state.kids.find((kid) => kid._id === kidId);
        return kid;
      };
    },
  },
  actions: {
    addChore(kidId, chore) {
      const id = this.kids.findIndex((kid) => kid._id === kidId);
      if (!id) {
        console.error(`User ID ${id} not found`);
      }
      console.log(id, chore);
      this.kids[id].chores.push(chore);
    },
    async createKid(kid) {
      const parentSettings = useSettingStore();
      const payload = { ...kid, parentId: parentSettings.settings.user._id };

      const result = await fetch(createKidsURL(), {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(payload),
      });
      console.log(result.status,result);

      // If 403 need to regenerate token or login again
      if (result.status === 403) {
        const settings = useSettingStore();
        console.log('getKids', 'refresh token');
        settings.refreshToken();
        return;
      }

      const data = await result.json();
      this.kids.push(data);
    },
    async loadKids() {
      console.log('getKids', kidsOfParentURL());
      const result = await fetch(kidsOfParentURL(), {
        method: 'GET',
        headers: authHeader(),
      });

      // If 403 need to regenerate token or login again
      if (result.status === 403) {
        const settings = useSettingStore();
        console.log('getKids', 'refresh token');
        settings.refreshToken();
        return;
      }

      const data = await result.json();
      console.log('getKids', data);
      this.kids = [...data];
    },
  },
});
