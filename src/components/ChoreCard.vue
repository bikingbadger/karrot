<template>
  <img class="ml-auto w-8 h-8" alt="Icon" :src="`${chore.icon}`" />
    <div class="mr-auto my-auto">
      {{ chore.description }}
    </div>
    <div class="flex flex-wrap my-auto">
      <img
        v-for="index in chore.value"
        :key="index"
        class="w-4 h-4"
        alt="Done"
        src="/assets/carrot.png"
      />
    </div>
</template>

<script setup>
defineProps({ chore: Object });
</script>

<style>

</style>