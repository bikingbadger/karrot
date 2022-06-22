<template>
  <div class="chore-card" v-for="chore in chores" :key="chore.id">
    <img class="icon" alt="Icon" :src="`${chore.icon}`" />
    <div>
      {{ chore.description }}
    </div>
    <div class="carrot-container">
      <img
        v-for="index in chore.value"
        :key="index"
        class="icon"
        alt="Done"
        src="/assets/carrot.png"
      />
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
  grid-template-columns: 1fr 2fr 2fr;
  width: 50vw;
  border: 2px dotted black;
}
.icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0;
  background-color: transparent;
}
.carrot-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
