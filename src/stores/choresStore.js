import { defineStore } from 'pinia';

export const useChoresStore = defineStore('chores', {
  state: () => ({
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
      {
        id: 4,
        description: 'Brush Hair',
        value: 1,
        icon: 'hair-brush',
      },
      {
        id: 5,
        description: 'Medicine',
        value: 3,
        icon: 'medicine',
      },
      {
        id: 6,
        description: 'Breakfast',
        value: 2,
        icon: 'pancakes',
      },
      {
        id: 7,
        description: 'Pack Bag',
        value: 2,
        icon: 'school-bag',
      },
      {
        id: 8,
        description: 'Pack Lunch',
        value: 2,
        icon: 'lunchbox',
      },
      {
        id: 9,
        description: 'Lights',
        value: 2,
        icon: 'light-bulb',
      },
      {
        id: 10,
        description: 'Shoes',
        value: 1,
        icon: 'sneakers',
      },
      {
        id: 11,
        description: 'Water Bottle',
        value: 3,
        icon: 'water',
      },
      { id: 12, description: 'Mask', value: 1, icon: 'mask' },
      {
        id: 13,
        description: 'Homework',
        value: 3,
        icon: 'homework',
      },
      {
        id: 13,
        description: 'Clothes',
        value: 3,
        icon: 'laundry',
      },
      {
        id: 13,
        description: 'Dishes',
        value: 5,
        icon: 'clean-dishes',
      },
      {
        id: 13,
        description: 'Clear Table',
        value: 3,
        icon: 'dining-table',
      },

      {
        id: 14,
        description: 'Wipe Table',
        value: 3,
        icon: 'dishcloth',
      },
    ],
  }),
  getters: {
    getChore: (state) => {
      return (choreId) => {
        return state.chores.find((chore) => chore.id === choreId);
      };
    },
  },
  actions: {},
});
