import { defineStore } from 'pinia';

export const useKidsStore = defineStore({
  id: 'kids',
  state: () => ({
    counter: 0,
    kids: [
      { id: 1, name: 'Lily', icon: 'penguin', chores: [] },
      { id: 2, name: 'Dean', icon: 'shark', chores: [] },
      { id: 3, name: 'Chloe', icon: 'butterfly', chores: [] },
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
