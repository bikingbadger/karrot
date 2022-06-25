<script setup>

defineProps({ chore: Object });
</script>

<template>
  <img class="ml-auto w-8 h-8" alt="Icon" :src="`/assets/${chore.icon}.png`" />
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
  <div>
    <img
      class="mx-auto w-4 h-4 my-auto"
      alt="Not Done"
      src="/assets/uncheck.png"
    />
    <img class="mx-auto w-4 h-4 my-auto" alt="Done" src="/assets/check.png" />
  </div>
</template>


<style></style>
