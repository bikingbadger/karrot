import defineStore from 'pinia';

export const useUsersStore = defineStore({
  id: 'users',
  state: () => {
    users: [];
  },
  getters: {
    getUsers: (state) => {
      return state.users;
    },
  },
  actions: {
    addUser(user) {
      state.user.push(user);
    },
  },
});
