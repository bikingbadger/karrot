<script setup>
import { storeToRefs } from 'pinia';
import { useChoresStore } from '../stores/choresStore';
import ChoreCard from './ChoreCard.vue';

const { chores } = storeToRefs(useChoresStore());
</script>

<template>
  <div
    class="grid grid-flow-col grid-cols-3 gap-4 m-4"
    v-for="chore in chores"
    :key="chore.id"
  >
    <chore-card :chore="chore" />
  </div>
</template>
