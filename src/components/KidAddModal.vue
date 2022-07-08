<script setup>
import { ref } from 'vue';
const emit = defineEmits(['closeModal', 'addKid']);

const name = ref('');
const icon = ref('');

const addKid = () => {
  console.log('addKid', name.value, icon.value);
  emit('addKid', { name: name.value, icon: icon.value });
};
</script>

<template>
  <div
    class="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-orange-100/50"
    @click.self="$emit('closeModal')"
  >
    <div class="relative mx-auto my-24 bg-neutral-100 p-8 w-2/3">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input
          v-model="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="name"
          type="text"
          placeholder="name"
        />
      </div>

      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="icon">
          icon
        </label>
        <input
          v-model="icon"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="icon"
          type="text"
          placeholder="icon"
        />
      </div>

      <button class="btn btn-blue mx-1" @click="addKid">Add</button>
      <button
        class="btn btn-blue mx-1"
        @click="$emit('closeModal', name, icon)"
      >
        Close
      </button>
    </div>
  </div>
</template>
