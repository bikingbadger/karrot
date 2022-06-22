import { defineStore } from 'pinia';

export const useChoresStore = defineStore({
  id: 'chores',
  state: () => ({
    chores: [
      { id: 1, description: 'Make Bed', value: 3, icon: '../assets/bed.png' },
      {
        id: 2,
        description: 'Get Dressed',
        value: 1,
        icon: '../assets/get-dressed.png',
      },
      {
        id: 3,
        description: 'Brush Teeth',
        value: 2,
        icon: '../assets/tooth.png',
      },
      {
        id: 4,
        description: 'Brush Hair',
        value: 1,
        icon: '../assets/hair-brush.png',
      },
      {
        id: 5,
        description: 'Medicine',
        value: 3,
        icon: '../assets/medicine.png',
      },
      {
        id: 6,
        description: 'Breakfast',
        value: 2,
        icon: '../assets/pancakes.png',
      },
      {
        id: 7,
        description: 'Pack Bag',
        value: 2,
        icon: '../assets/school-bag.png',
      },
      {
        id: 8,
        description: 'Pack Lunch',
        value: 2,
        icon: '../assets/lunchbox.png',
      },
      {
        id: 9,
        description: 'Lights',
        value: 2,
        icon: '../assets/light-bulb.png',
      },
      {
        id: 10,
        description: 'Shoes',
        value: 1,
        icon: '../assets/sneakers.png',
      },
      {
        id: 11,
        description: 'Water Bottle',
        value: 3,
        icon: '../assets/water.png',
      },
      { id: 12, description: 'Mask', value: 1, icon: '../assets/mask.png' },
      {
        id: 13,
        description: 'Homework',
        value: 3,
        icon: '../assets/homework.png',
      },
      {
        id: 13,
        description: 'Clothes',
        value: 3,
        icon: '../assets/laundry.png',
      },
      {
        id: 13,
        description: 'Dishes',
        value: 5,
        icon: '../assets/clean-dishes.png',
      },
      {
        id: 13,
        description: 'Clear Table',
        value: 3,
        icon: '../assets/dining-table.png',
      },

      {
        id: 14,
        description: 'Wipe Table',
        value: 3,
        icon: '../assets/dishcloth.png',
      },
    ],
  }),
  getters: {},
  actions: {},
});
