<template>
  <div class="border-2 ring-1 rounded-sm grid justify-center">
    <h2 class="text-xl font-bold my-auto">{{ kidDetails.name }}</h2>
    <img class="mx-auto w-4 h-4 my-auto" alt="Icon" :src="`../assets/${kidDetails.icon}.png`" />

    <h2>Chores</h2>
    <img class="icon" alt="Not Done" src="/assets/uncheck.png" />
    <img class="icon" alt="Done" src="/assets/check.png" />
  </div>
</template>

<script setup>
defineProps({ kidDetails: Object });
</script>

<style></style>
