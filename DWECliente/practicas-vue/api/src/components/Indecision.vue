<template>
  <img v-if=img v-bind:src=img alt="img">

  <div class="bg-dark"></div>
  <div class="indecision-container">
    <h1>Indecision App</h1>
    <input type="text" v-model=question placeholder="Hazme una pregunta">
    <p>Recuerda acabar con signo de interrogacion (?)</p>
    <div v-if=result>
      <h2>{{question}}</h2>
      <h1>{{(result==="yes")? "Si":"No"}}</h1>
    </div>
  </div>
</template>

<script >
  export default{
    data(){
      return{
        question: null,
        img: null,
        result: null
      }
    },

    watch: {//para capturar eventos
      question(value, oldValue){
        console.log(value, oldValue)
        if (!value.includes("?")) return
        console.log("Tenemos interrogacion")
        this.getAnswer()
      }
    },

    methods: {
      async getAnswer() {
        const {answer, image} = await fetch("https://yesno.wtf/api").then((res) => res.json())
        console.log(answer)
        this.img = image
        this.result = answer
      }
    }
  }
</script>

<style>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin: 20px;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
