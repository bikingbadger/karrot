import { defineStore, storeToRefs } from 'pinia';
import { useSettingStore } from './settingsStore';

const apiurl = `${import.meta.env.VITE_APP_API_URL}`;

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
    addUser(kid) {
      this.kids.push(kid);
    },
    addChore(kidId, chore) {
      const id = this.kids.findIndex((kid) => kid._id === kidId);
      if (!id) {
        console.error(`User ID ${id} not found`);
      }
      console.log(id, chore);
      this.kids[id].chores.push(chore);
    },
    async loadKids() {
      const apiEndpoint = `${apiurl}/api/kid/kidsOfParent`;
      const settings = useSettingStore();
      console.log('getKids', apiEndpoint, settings.accessToken);
      const result = await fetch(apiEndpoint, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + settings.accessToken,
        },
      });

      // If 403 need to regenerate token or login again
      if (result.status === 403) {
        console.log('getKids', 'Regenerate');
        settings.refreshToken;
        return;
      }

      const data = await result.json();
      console.log('getKids', data);
      this.kids = [...data];
    },
  },
});
