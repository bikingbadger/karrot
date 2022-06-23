import { defineStore } from 'pinia';

export const useSettingStore = defineStore('settingsStore', {
  state: () => ({
    parent: {
      name: 'Hilton',
      email: 'contact@hiltonmeyer.com',
      code: 1981,
    },
  }),
});
