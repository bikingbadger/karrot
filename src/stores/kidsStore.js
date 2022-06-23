import { defineStore } from 'pinia';

export const useKidsStore = defineStore('kids', {
  state: () => ({
    counter: 0,
    kids: [
      {
        id: 1,
        name: 'Lily',
        icon: 'penguin',
        chores: [
          { id: 1, description: 'Make Bed', value: 3, icon: 'bed' },
          {
            id: 2,
            description: 'Get Dressed',
            value: 1,
            icon: 'get-dressed',
          },
          {
            id: 3,
            description: 'Brush Teeth',
            value: 2,
            icon: 'tooth',
          },
        ],
      },
      {
        id: 2,
        name: 'Dean',
        icon: 'shark',
        chores: [
          { id: 1, description: 'Make Bed', value: 3, icon: 'bed' },
          {
            id: 2,
            description: 'Get Dressed',
            value: 1,
            icon: 'get-dressed',
          },
          {
            id: 3,
            description: 'Brush Teeth',
            value: 2,
            icon: 'tooth',
          },
        ],
      },
      {
        id: 3,
        name: 'Chloe',
        icon: 'butterfly',
        chores: [
          { id: 1, description: 'Make Bed', value: 3, icon: 'bed' },
          {
            id: 2,
            description: 'Get Dressed',
            value: 1,
            icon: 'get-dressed',
          },
          {
            id: 3,
            description: 'Brush Teeth',
            value: 2,
            icon: 'tooth',
          },
        ],
      },
    ],
  }),
  getters: {
    getKids: (state) => {
      return state.kids;
    },
    getKidChores: (state) => {
      return (kidId) => {
        const kid = state.kids.find((kid) => kid.id === kidId);
        return kid;
      };
    },
  },
  actions: {
    addUser(kid) {
      state.kids.push(kid);
    },
  },
});
