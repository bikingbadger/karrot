<script setup>
import { storeToRefs } from 'pinia';
import { useKidsStore } from '../stores/kids.js';
import KidCard from '../components/KidCard.vue';

const { kids } = storeToRefs(useKidsStore());
</script>

<template>
  <h2>Kids</h2>
  <main>
    <div class="kid-card">
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
