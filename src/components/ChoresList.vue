<template>
  <div
    class="grid grid-flow-col grid-cols-3 gap-4 m-4"
    v-for="chore in chores"
    :key="chore.id"
  >
    <img class="ml-auto w-8 h-8" alt="Icon" :src="`${chore.icon}`" />
    <div class="mr-auto my-auto">
      {{ chore.description }}
    </div>
    <div class="flex flex-wrap my-auto">
      <img
        v-for="index in chore.value"
        :key="index"
        class="w-4 h-4"
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

<style>

</style>