<script setup>
import TheHeader from './components/TheHeader.vue';

</script>

<template>
  <TheHeader />
  <router-link to="/">Home</router-link>
   <router-link to="/Users">Users</router-link>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
