<template>
  <Counter />
  <Counter title="Esto es un contador" />
  <Counter title="Esto es un contador" start="20"/>
</template>

<script>
  import Counter from "./components/Counter.vue"

  export default {
    components: {Counter}
  }
</script>

<style>

</style>
