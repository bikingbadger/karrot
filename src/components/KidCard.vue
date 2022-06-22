<template>
  <div>
    <h2>{{ kidDetails.name }}</h2>
    <img
      class="icon"
      alt="Icon"
      :src="`../assets/${kidDetails.icon}.png`"
    />
  </div>
</template>

<script setup>
defineProps({ kidDetails: String });
</script>

<style>

</style>
