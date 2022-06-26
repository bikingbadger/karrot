<script setup>
import ChoresList from '../components/ChoresList.vue';

defineProps({ kidDetails: Object });
</script>

<template>
  <div class="border-2 ring-1 rounded-sm grid justify-center">
    <h2 class="text-xl font-bold my-auto">{{ kidDetails.name }}</h2>
    <img
      class="mx-auto w-8 h-8 my-auto"
      alt="Icon"
      :src="`../assets/${kidDetails.icon}.png`"
    />

    <h3 class="text-lg font-bold my-auto">Chores</h3>
    
    <chores-list :Chores="kidDetails.chores" :showMarker="true" />
  </div>
</template>

<style></style>
