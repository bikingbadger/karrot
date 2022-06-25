<script setup>
import { storeToRefs } from 'pinia';
import { useChoresStore } from '../stores/choresStore';
import ChoresList from '../components/ChoresList.vue';

const { chores } = storeToRefs(useChoresStore());
</script>

<template>
  <chores-list :Chores="chores" />
</template>

<style scoped></style>
