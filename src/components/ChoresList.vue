<script setup>
import ChoreCard from './ChoreCard.vue';
defineProps({ Chores: Object });

</script>

<template>
  <div
    class="grid grid-flow-col grid-cols-3 gap-4 m-4"
    v-for="chore in Chores"
    :key="chore.id"
  >
    <chore-card :chore="chore" />
  </div>
</template>
