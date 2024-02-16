import {defineStore} from 'pinia'
import { getRandomInt } from '../helpers/getRandomint'

export const useCounterStore = defineStore("counterStore", {
    //state  propiedades
    state: () => ({
        counter: 2,
        isLoading: false,
    }),

    //getters
    getters: {
        scurareCount: (state) => state.counter*state.counter,
    },

    //actions  metodos
    actions: {
        increment() {
            this.counter++
        },
        async incrementRandom(){
            this.isLoading = true
            const randomInt = await getRandomInt()
            this.counter += randomInt
            this.isLoading = false
        }
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: "my-counter-store",
                storage: localStorage,
            }
        ]
    }
})