<script setup>
import { storeToRefs } from 'pinia';
import { useKidsStore } from '../stores/kidsStore.js';
import KidCard from '../components/KidCard.vue';

const { kids } = storeToRefs(useKidsStore());
</script>

<template>
  <main class="">
    <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-2">
      <kid-card v-for="kid in kids" :key="kid.id" :kidDetails="kid" />
    </div>
  </main>
</template>

<style>
.kid-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
