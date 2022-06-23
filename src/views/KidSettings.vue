<script setup>
import { useRoute } from 'vue-router';

import { useKidsStore } from '@/stores/kidsStore.js';

const kidsStore = useKidsStore();

const route = useRoute();
const userId = parseInt(route.params.id);
console.log(route.params.id, userId);

const kid = kidsStore.getKidChores(userId);
</script>

<template>
  <h2>{{ kid.name }}</h2>
  <ul v-for="chore in kid.chores" :key="chore.id">
    <li>{{ chore.description }}</li>
  </ul>
</template>

<style></style>
