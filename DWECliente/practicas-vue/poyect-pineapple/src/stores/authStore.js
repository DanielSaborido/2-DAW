import {defineStore} from 'pinia'

export const useAuthStore = defineStore("authStore", {
    //state  propiedades
    state: () => ({
        user: {
            id:"",
            name:"",
            email:"",
            token:"",
        },
    }),

    //getters
    getters: {
        
    },

    //actions  metodos
    actions: {
        login(user){
            this.user = user
        },
        logout(){
            this.user = {
                id:"",
                name:"",
                email:"",
                token:"",
              }
        }
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: "my-user-store",
                storage: localStorage,
            }
        ]
    }
})