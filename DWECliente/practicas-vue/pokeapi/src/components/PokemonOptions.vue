<template>
    <div class="options-container">
        <h2>Opciones</h2>
        <ul>
            <li 
              v-for="pokemon in pokemons" 
              :key="pokemon.id" 
              @click="$emit('selection', pokemon.id)"
            >
            {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
      pokemons: {
        type: Array,
        required: true,
      }
    },
  }
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>