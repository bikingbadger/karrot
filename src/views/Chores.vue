<script setup>
import { storeToRefs } from 'pinia';
import { useChoresStore } from '../stores/choresStore';
import ChoresList from '../components/ChoresList.vue';

const choreStore = useChoresStore();
choreStore.getChores();

const { chores } = storeToRefs(useChoresStore());
</script>

<template>
  <chores-list :Chores="chores" :showMarker="false" />
</template>

<style scoped></style>
