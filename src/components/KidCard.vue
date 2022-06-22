<template>
  <div>
    <h2>{{ kidDetails.name }}</h2>
    <img
      class="user-icon"
      alt="Icon"
      :src="`../assets/${kidDetails.icon}.png`"
    />
  </div>
</template>

<script setup>
defineProps({ kidDetails: String });
</script>

<style>
.user-icon {
  width: 3rem;
  height: 3rem;
}
</style>
