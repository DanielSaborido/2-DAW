<template>
    <div v-if="user.id">
        <h1>Bienvenido, {{ user.id }} - {{ user.name }}</h1>
        <button @click="logout">Logout</button>
    </div>
    <div v-else>
        <h1>Por favor inicia sesion</h1>
        <button @click="login">LogIn</button>
    </div>
</template>

<script>
import {useAuthStore} from '../stores/authStore'
export default {
    computed: {
        user(){
            return useAuthStore().user
        }
    },
    methods: {
        login() {
            const user = {
                id:"1",
                name:"Paco",
                email:"hola@hola.com",
                token:"estas seguro",
              }
            useAuthStore().login(user)
        },
        logout(){
            useAuthStore().logout()
        }
    }
}
</script>

<style>

</style>