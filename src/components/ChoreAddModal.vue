<script setup>
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useChoresStore } from '../stores/choresStore';
import ChoresList from '../components/ChoresList.vue';

const emit = defineEmits(['markCompleted', 'closeModal']);
const props = defineProps({ CurrentChores: Object });

const { chores } = storeToRefs(useChoresStore());
const remainingChores = reactive(
  chores.value.filter((chore) => {
    return props.CurrentChores.findIndex((cur) => cur._id === chore._id) === -1;
  }),
);

const markCompleted = (id) => {
  console.log('remainingChores', id, remainingChores);
  const index = remainingChores.findIndex((chore) => chore._id === id);
  console.log(index);
  remainingChores.splice(index, 1);
  emit('markCompleted', id);
};
</script>

<template>
  <div
    class="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-orange-100/50"
    @click.self="$emit('closeModal')"
  >
    <div class="relative mx-auto my-24 bg-neutral-100 p-8 w-2/3">
      <chores-list
        :Chores="remainingChores"
        :showMarker="true"
        @mark-completed="markCompleted"
      />
      <!-- @mark-completed="(...args) => $emit('markCompleted', ...args)" -->
      <button class="btn btn-blue" @click="$emit('closeModal')">Close</button>
    </div>
  </div>
</template>
