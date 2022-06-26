<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useKidsStore } from '@/stores/kidsStore.js';
import ChoreAddModal from '@/components/ChoreAddModal.vue';

const route = useRoute();
const userId = parseInt(route.params.id);

const kidsStore = useKidsStore();
const kid = kidsStore.getKid(userId);
const currentChores = kid.chores;

let showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const openModal = () => {
  showModal.value = true;
};
</script>

<template>
  <h2 class="text-xl font-bold my-auto">{{ kid.name }}</h2>

  <chore-add-modal v-if="showModal" @close-modal="closeModal()" :CurrentChores="currentChores"/>
  <button class="btn btn-blue" @click="openModal()">Add</button>

  <ul
    class="flex flex-wrap my-auto justify-center"
    v-for="chore in kid.chores"
    :key="chore.id"
  >
    <img
      class="w-4 h-4 my-auto"
      alt="Icon"
      :src="`../assets/${chore.icon}.png`"
    />
    <span>{{ chore.description }}</span>
  </ul>
</template>

<style></style>
