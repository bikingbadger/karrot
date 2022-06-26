<script setup>
import { ref } from 'vue';
defineProps({ Chore: Object, showMarker: Boolean });
defineEmits(['markCompleted']);

const completed = ref(false);
</script>

<template>
  <img class="ml-auto w-8 h-8" alt="Icon" :src="`/assets/${Chore.icon}.png`" />
  <div class="mr-auto my-auto">
    {{ Chore.description }}
  </div>
  <div class="flex flex-wrap my-auto">
    <img
      v-for="index in Chore.value"
      :key="index"
      class="w-4 h-4"
      alt="Done"
      src="/assets/carrot.png"
    />
  </div>
  <div v-if="showMarker">
    <img
      v-if="!completed"
      class="mx-auto w-4 h-4 my-auto"
      alt="Not Done"
      src="/assets/uncheck.png"
      @click="$emit('markCompleted', Chore.id)"
    />
    <img
      v-else
      class="mx-auto w-4 h-4 my-auto"
      alt="Done"
      src="/assets/check.png"
    />
  </div>
</template>

<style></style>
