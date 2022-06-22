import { defineStore } from 'pinia';

export const useKidsStore = defineStore({
  id: 'kids',
  state: () => ({
    counter: 0,
    kids: [
      { id: 1, name: 'Lily', icon: 'penguin' },
      { id: 2, name: 'Dean', icon: 'shark' },
      { id: 3, name: 'Chloe', icon: 'butterfly' },
    ],
  }),
  getters: {
    getKids: (state) => {
      return state.kids;
    },
  },
  actions: {
    addUser(kid) {
      state.kids.push(kid);
    },
  },
});
