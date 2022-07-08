<template>
  <h2>Logging out</h2>
</template>

<script setup>
import router from '../router';
import { onMounted } from 'vue';
import { useSettingStore } from '../stores/settingsStore.js';
const settings = useSettingStore();
onMounted(() => {
  console.log('Will logout now');
  if (!settings.isAuthenticated) {
    router.push({ name: 'Login' });
  } else {
    settings.removeSessionData();
    router.push({ name: 'Home' });
  }
});
</script>

<style></style>
