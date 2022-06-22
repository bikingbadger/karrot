<template>
  <div class="chore-card" v-for="chore in chores" :key="chore.id">
    <img class="icon" alt="Icon" :src="`${chore.icon}`" />
    <div>
      {{ chore.description }}
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useChoresStore } from '../stores/chores';

const { chores } = storeToRefs(useChoresStore());
</script>

<style scoped>
.chore-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 50vw;
  border: 2px dotted black;
}
.icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0;
  background-color: transparent;
}
</style>
