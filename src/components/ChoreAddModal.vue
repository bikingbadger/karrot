<script setup>
import { storeToRefs } from 'pinia';
import { useChoresStore } from '../stores/choresStore';
import ChoresList from '../components/ChoresList.vue';

defineEmits(['closeModal', 'markCompleted']);
const props = defineProps({ CurrentChores: Object });

const { chores } = storeToRefs(useChoresStore());
const remainingChores = chores.value.filter((chore) => {
  return props.CurrentChores.findIndex((cur) => cur.id === chore.id) === -1;
});
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
        @mark-completed="(...args) => $emit('markCompleted', ...args)"
      />
      <button class="btn btn-blue" @click="$emit('closeModal')">Close</button>
    </div>
  </div>
</template>
