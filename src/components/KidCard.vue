<template>
  <h2>{{ kidDetails.name }}</h2>
  <img class="user-icon" alt="Icon" :src="`../assets/${kidDetails.icon}.png`" />
</template>

<script setup>
defineProps({ kidDetails: String });
</script>

<style>
.user-icon {
  width: 50px;
  height: 50px;
}
</style>
