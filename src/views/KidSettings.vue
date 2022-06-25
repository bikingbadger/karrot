<script setup>
import { useRoute } from 'vue-router';
import { useKidsStore } from '@/stores/kidsStore.js';

const route = useRoute();
const userId = parseInt(route.params.id);

const kidsStore = useKidsStore();
const kid = kidsStore.getKidChores(userId);
</script>

<template>
  <h2 class="text-xl font-bold my-auto">{{ kid.name }}</h2>
  <button class="btn btn-blue">Add</button>
  <ul
    class="flex flex-wrap my-auto justify-center"
    v-for="chore in kid.chores"
    :key="chore.id"
  >
    <img
      class="w-4 h-4 my-auto"
      alt="Icon"
      :src="`../assets/${chore.icon}.png`"
    />
    <span>{{ chore.description }}</span>
  </ul>
</template>

<style></style>
