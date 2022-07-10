<template>
  <ul class="grid grid-cols-3">
    <li v-for="icon in icons" :key="icon.id">
      <img
        class="mx-auto w-8 h-8 my-auto"
        :class="isActiveClass(icon)"
        alt="Icon"
        :src="`../assets/avatar/${icon.name}.png`"
        @click="iconSelected(icon)"
      />{{ icon.selected }}
    </li>
  </ul>
</template>

<script setup>
import { reactive } from 'vue';

const emits = defineEmits(['iconSelected']);

const icons = reactive([
  { id: 1, name: 'butterfly', selected: false },
  { id: 2, name: 'camel', selected: false },
  { id: 3, name: 'cat', selected: false },
  { id: 4, name: 'cow', selected: false },
  { id: 5, name: 'kangaroo', selected: false },
  { id: 6, name: 'penguin', selected: false },
  { id: 7, name: 'rabbit', selected: false },
  { id: 8, name: 'rhinoceros', selected: false },
  { id: 9, name: 'shark', selected: false },
]);

const iconSelected = (icon) => {
  console.log('iconList', icon);
  //Find the id in the array, not dependant on id of the Icon object
  const iconId = icons.findIndex((element) => {
    return element.id === icon.id;
  });
  console.log('iconList', iconId, icons[iconId]);

  // Mark all as unselected
  for (let i = 0; i <= icons.length - 1; i++) {
    //console.log('loop',  icons[i].selected);
    icons[i].selected = false;
  }

  // Set the selected icon
  icons[iconId].selected = true;
  console.log('iconList', icons);
  emits('iconSelected', icon.name);
};

const isActiveClass = (icon) => {
  console.log(icon.selected);
  let classes = {
    isSelected: icon.selected, // for example
  };

  return classes;
};
</script>

<style lang="postcss" scoped>
.isSelected {
  @apply bg-sky-200 rounded-full p-2;
}
</style>
