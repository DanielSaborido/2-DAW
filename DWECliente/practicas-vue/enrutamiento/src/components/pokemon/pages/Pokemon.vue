<template>
    <h2>
        Pokemon page - # {{ id }}
    </h2>
</template>

<script>
export default{
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            // id: null,
        }
    },
    created(){
        console.log(this.$route)
        console.log(this.$attrs)//si tienes mas props pero no los declaras te lo guarda en atributos
        this.getPokemon()
        // const {id} = this.$route.params
        // this.id = id
    },
    methods: {
        async getPokemon(){
            console.log(this.id)
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((result) => result.json())
            console.log(pokemon)
        }
    },
    watch: {
        id(){
            this.getPokemon()
        }
    }
}
</script>

<style>

</style>