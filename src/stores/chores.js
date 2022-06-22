import { defineStore } from 'pinia';

export const useChoresStore = defineStore({
  id: 'chores',
  state: () => ({
    chores: [
      { id: 1, description: 'Make Bed', value: '', icon: '../assets/bed.png' },
      {
        id: 2,
        description: 'Get Dressed',
        value: '',
        icon: '../assets/get-dressed.png',
      },
      {
        id: 3,
        description: 'Brush Teeth',
        value: '',
        icon: '../assets/tooth.png',
      },
      {
        id: 4,
        description: 'Brush Hair',
        value: '',
        icon: '../assets/hair-brush.png',
      },
      {
        id: 5,
        description: 'Medicine',
        value: '',
        icon: '../assets/medicine.png',
      },
      {
        id: 6,
        description: 'Breakfast',
        value: '',
        icon: '../assets/pancakes.png',
      },
      {
        id: 7,
        description: 'Pack Bag',
        value: '',
        icon: '../assets/school-bag.png',
      },
      {
        id: 8,
        description: 'Pack Lunch',
        value: '',
        icon: '../assets/lunchbox.png',
      },
      {
        id: 9,
        description: 'Lights',
        value: '',
        icon: '../assets/light-bulb.png',
      },
      {
        id: 10,
        description: 'Shoes',
        value: '',
        icon: '../assets/sneakers.png',
      },
      {
        id: 11,
        description: 'Water Bottle',
        value: '',
        icon: '../assets/water.png',
      },
      { id: 12, description: 'Mask', value: '', icon: '../assets/mask.png' },
      {
        id: 13,
        description: 'Homework',
        value: '',
        icon: '../assets/homework.png',
      },
      {
        id: 13,
        description: 'Clothes',
        value: '',
        icon: '../assets/laundry.png',
      },
      {
        id: 13,
        description: 'Dishes',
        value: '',
        icon: '../assets/clean-dishes.png',
      },
      {
        id: 13,
        description: 'Clear Table',
        value: '',
        icon: '../assets/dining-table.png',
      },
      
      {
        id: 14,
        description: 'Wipe Table',
        value: '',
        icon: '../assets/dishcloth.png',
      },
    ],
  }),
  getters: {},
  actions: {},
});
