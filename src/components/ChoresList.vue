<script setup>
import ChoreCard from './ChoreCard.vue';
const props = defineProps({ Chores: Object, showMarker: Boolean });
const emit = defineEmits(['markCompleted']);
</script>

<template>
  <div
    class="grid grid-flow-col grid-cols-3 gap-4 m-4"
    v-for="chore in Chores"
    :key="chore.id"
  >
    <chore-card
      :Chore="chore"
      :showMarker="showMarker"
      @mark-completed="(...args) => $emit('markCompleted', ...args)"
    />
  </div>
</template>
