import { defineStore } from 'pinia';

export const useChoresStore = defineStore({
  id: 'chores',
  state: () => ({
    chores: [
      { id: 1, description: 'Make Bed', value: '', icon: '' },
      { id: 2, description: 'Get Dressed', value: '', icon: '' },
      { id: 3, description: 'Brush Teeth', value: '', icon: '' },
      { id: 4, description: 'Brush Hair', value: '', icon: '' },
      { id: 5, description: 'Medicine', value: '', icon: '' },
      { id: 6, description: 'Breakfast', value: '', icon: '' },
      { id: 7, description: 'Pack Bag', value: '', icon: '' },
      { id: 8, description: 'Pack Lunch', value: '', icon: '' },
      { id: 9, description: 'Lights', value: '', icon: '' },
      { id: 10, description: 'Shoes', value: '', icon: '' },
      { id: 11, description: 'Water Bottle', value: '', icon: '' },
      { id: 12, description: 'Mask', value: '', icon: '' },
      { id: 13, description: 'Homework', value: '', icon: '' },
      { id: 13, description: 'Clothes', value: '', icon: '' },
      { id: 13, description: 'Dishes', value: '', icon: '' },
      { id: 13, description: 'Clear Table', value: '', icon: '' },
    ],
  }),
  getters: {},
  actions: {},
});
