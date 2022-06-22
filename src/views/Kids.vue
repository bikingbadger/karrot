<script setup>
import { storeToRefs } from 'pinia';
import { useKidsStore } from '../stores/kids.js';
import KidCard from '../components/KidCard.vue';

const { kids } = storeToRefs(useKidsStore());
</script>

<template>
  <h2>Kids</h2>
  <main>
    <div v-for="kid in kids" :key="kid.id">
       <kid-card :kidDetails="kid" />
    </div>
  </main>
</template>

<style></style>
