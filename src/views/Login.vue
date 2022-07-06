<script setup>
import { storeToRefs } from 'pinia';
import AuthService from '../services/auth-service.js';
import { ref } from 'vue';

import { useSettingStore } from '../stores/settingsStore.js';
const settingsStore = useSettingStore();

const email = ref('');
const password = ref('');

const handleLogin = async () => {
  const response = await AuthService.login({
    email: email.value,
    password: password.value,
  });
  if (response.status === 'success')
    settingsStore.setDetails({ ...response, isAuthenticated: true });
  
};
</script>

<template>
  <form>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="email"
        >
          email
        </label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          v-model="password"
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between md:justify-center">
        <button
          @click.prevent="handleLogin"
          class="bg-sky-500 hover:bg-sky-800 hover:text-white text-blue text-sm font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue hover:text-sky-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  </form>
</template>

<style></style>
