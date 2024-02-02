<template>
  <h1>Pokemon Page</h1>
  <Navbar />
  <router-view />
  
</template>

<script >
  import Navbar from "./components/shared/Navbar.vue"
  export default {
    components: {Navbar},
  }
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
