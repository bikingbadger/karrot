<template>
  <div v-for="chore in chores" :key="chore.id">{{ chore.description }}</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useChoresStore } from '../stores/chores';

const { chores } = storeToRefs(useChoresStore());
</script>

<style></style>
