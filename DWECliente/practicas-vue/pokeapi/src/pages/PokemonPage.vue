<template>
    <div v-if="!pokemon">
        <h1>ESpere</h1>
    </div>
    <div v-else>
        <h2>How is that pokemon?</h2>
        <p>Pokemons acertados:   {{ aciertos }}         Pokemons fallados:   {{ fallos }}</p>
        <PokemonImage :showPokemon="show" :pokemonID="pokemon.id"/>
        <PokemonOptions :pokemons="pokemonsArr" @selection="checkAnswer"/>
        <h3 v-if="resultado">{{ resultado }}</h3>
        <button v-if="resultado" @click="newGame">Jugar de nuevo</button>
    </div>
</template>

<script>
import getPokemonOptions from '../helpers/getPokemonOptions'
import PokemonImage from '../components/PokemonImage.vue'
import PokemonOptions from '../components/PokemonOptions.vue'

export default {
  components: { PokemonOptions, PokemonImage },
  data() {
    return{
      pokemonsArr: [],
      pokemon: null,
      show: false,
      resultado: null,
      aciertos: 0,
      fallos: 0,
    }
  },
  methods: {
    async mixedPokemonArr(){
      this.pokemonsArr = await getPokemonOptions()
      const rnInt= Math.floor(Math.random()*4)
      this.pokemon = this.pokemonsArr[rnInt]
    },
    checkAnswer(selectedID){
        console.log(selectedID)
        this.show = true
        selectedID === this.pokemon.id? (this.resultado = "Has acertado")(this.aciertos++) : (this.resultado = `Te has equivocado, era ${this.pokemon.name}`)(this.fallos++)
    },
    newGame(){
        this.show = false
        this.resultado = null
        this.pokemonsArr = []
        this.pokemon = null
        this.mixedPokemonArr()
    }
  },
  mounted() {
    this.mixedPokemonArr()
  }
}
</script>

<style>

</style>