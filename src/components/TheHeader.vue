<template>
  <header class="grid grid-flow-col p-4">
    <img
      class="ml-auto w-8 md:w-20 h-8 md:h-20"
      alt="Karrot"
      src="../assets/logo.png"
    />
    <h1 class="text-2xl md:text-3xl font-bold mr-auto my-auto pl-4">Karot</h1>
  </header>
  <div
    class="grid grid-flow-col justify-center grid-cols-[repeat(3,max-content)] gap-4 p-4"
  >
    <router-link to="/"
      ><img
        class="mx-auto w-8 h-8 hover:bg-sky-500/50 hover:rounded-full"
        alt="Home"
        src="/assets/house.png"
    /></router-link>
    <router-link to="/Kids">
      <img
        class="mx-auto w-8 h-8 hover:bg-sky-500/50 hover:rounded-full"
        alt="Kids"
        src="/assets/children.png"
    /></router-link>
    <router-link to="/Chores">
      <img
        class="mx-auto w-8 h-8 hover:bg-sky-500/50 hover:rounded-full"
        alt="Chores"
        src="/assets/household-chores.png"
    /></router-link>
    <router-link to="/Settings">
      <img
        class="mx-auto w-8 h-8 hover:bg-sky-500/50 hover:rounded-full"
        alt="Chores"
        src="/assets/construction-tools.png"
    /></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
