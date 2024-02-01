<template>
  <div>
    <h1>Counter</h1>
    <h2>{{ title }}</h2>
    <p>{{ counter }} <sub>2</sub> = {{ getScuareComputed }}</p>
    <p>{{ counter }} <sub>2</sub> = {{ getScuareComputed }}</p>
    <p>{{ counter }} <sub>2</sub> = {{ getScuareComputed }}</p>
    <p>{{ counter }} <sub>2</sub> = {{ getScuare() }}</p>
    <button v-on:click=(counter++)>Incrementar contador</button>
    <button v-on:click=(counter--)>Decrementar contador</button>
  </div>
</template>

<script>
  export default {
    props:{
        title: String,
        start: {
            type: Number,
            required: false,
            default: 10
        }
    },

    data() {
        return{
            counter: this.start,
        }
    },

    methods:{
        getScuare(){
            console.log("Resultado calculado")
            return this.counter*this.counter
        }
    },

    computed: {
        //almacena los resultados en cache para que no se tenga que llamar constantemente (propiedad computada)
        //no puede recibir argumentos
        //no usan parentesis para ser llamadas
        getScuareComputed(){
            console.log("Resultado calculado")
            return this.counter*this.counter
        }
    }
  } 
</script>

<style>

</style>
