<script setup>
import { storeToRefs } from 'pinia';
import { useKidsStore } from '../stores/kidsStore.js';

const { kids } = storeToRefs(useKidsStore());
const kidsStore = useKidsStore();
kidsStore.getKids();
</script>

<template>
  <ul v-for="kid in kids" :key="kid.id">
    <li class="">
      <router-link
        class="flex flex-wrap my-auto justify-center"
        :to="`/Kid-Settings/${kid.id}`"
        ><img
          class="w-4 h-4 my-auto"
          alt="Icon"
          :src="`../assets/${kid.icon}.png`"
        />
        <span>{{ kid.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<style></style>
