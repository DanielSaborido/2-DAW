<template>
  <div>
    <h1>Counter</h1>
    <p>{{ counter }}</p>
    <p>{{ scurareCount }}</p>
    <button @click="increment">Incrementar</button>
    <button @click="incrementRandom" :disabled="isLoading">Incrementar Random</button>
    <p v-if="isLoading">Cargando...</p>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counterStore'
import { mapState,mapActions } from 'pinia';
export default {
  computed: {
    ...mapState(useCounterStore, ["counter", "isLoading", "scurareCount"]),
    // ...mapState(useCounterStore, {
    //   "contador": counter, 
    //   "cuadrado": scurareCount,
    // }),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment", "incrementRandom"])
    // increment(){
    //   const store = useCounterStore()
    //   store.increment()
    // }
  }
}
</script>

<style>

</style>