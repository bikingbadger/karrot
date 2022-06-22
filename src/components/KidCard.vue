<template>
  <div>
    <h2>{{ kidDetails.name }}</h2>
    <img class="icon" alt="Icon" :src="`../assets/${kidDetails.icon}.png`" />

    <h2>Chores</h2>
    <img class="icon" alt="Not Done" src="/assets/uncheck.png" />
    <img class="icon" alt="Done" src="/assets/check.png" />
  </div>
</template>

<script setup>
defineProps({ kidDetails: String });
</script>

<style></style>
