<template>
    <h2>about page</h2>
    <p>{{ name }}</p>
    <button @click="changeName">cambiar nombre</button>
</template>

<script>
export default{
    data() {
        return{
            name: "Devora"
        }
    },

    methods:{
        changeName(){
            this.name = "Daniel"
        }
    },

    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {// mejor momento para hacer llamada a la api
        this.name = "Paco"
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    mounted() {
        console.log("mounted")
    },
    beforeUpdate() {// se activa si el cambio afecta al DOM
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")
    },
    beforeUnmount() {
        console.log("beforeUnmount")
    },
    unmounted() {
        console.log("unmounted")
    },
    errorCaptured() {//no se puede provar todavia
        console.log("errorCaptured")
    },
    renderTracked() {
        console.log("renderTracked")
    },
    renderTriggered() {
        console.log("renderTriggered")
    },
    activated() {//no se puede provar todavia
        console.log("activated")
    },
    deactivated() {//no se puede provar todavia
        console.log("deactivated")
    },
    serverPrefetch() {
        console.log("serverPrefetch")
    },
}
</script>

<style>

</style>