<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useKidsStore } from '../stores/kidsStore.js';
import KidAddModal from './KidAddModal.vue';

const { kids } = storeToRefs(useKidsStore());
const kidsStore = useKidsStore();
kidsStore.loadKids();

// Modal
let showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const openModal = () => {
  showModal.value = true;
};

// Add Kid
const addKid = (name, icon) => {
  showModal.value = false;
  console.log('Adding kid', name, icon);
  kidsStore.createKid(name, icon)
};
</script>

<template>
  <button class="btn btn-blue mx-1" @click="openModal()">Add</button>
  <ul v-for="kid in kids" :key="kid.id">
    <li class="">
      <router-link
        class="flex flex-wrap my-auto justify-center"
        :to="`/Kid-Settings/${kid._id}`"
        ><img
          class="w-4 h-4 my-auto"
          alt="Icon"
          :src="`../assets/avatar/${kid.icon}.png`"
        />
        <span>{{ kid.name }}</span>
      </router-link>
    </li>
  </ul>

  <kid-add-modal
    v-if="showModal"
    @close-modal="closeModal"
    @add-kid="addKid"
  />
</template>

<style></style>
