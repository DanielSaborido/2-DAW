<template>
    <div class="pokemon-container">
        <img :src="imgSRC" alt="pokemon" class="hidden-pokemon">
        <img :src="imgSRC" alt="pokemon" class="fade-in" v-if="showPokemon">
    </div>
</template>

<script>
  export default {
    props:{
      pokemonID: {
        type: Number,
        required: true,
      },
      showPokemon: {
        type: Boolean,
        required: true,
        default: false,
      }
    },
    computed: {
      imgSRC() {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`
      }
    }
  }
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>