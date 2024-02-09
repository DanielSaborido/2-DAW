import {createRouter, createWebHashHistory} from "vue-router"
import List from '../pokemon/pages/List.vue'
import autentication from "./auth_guards"

const routes = [
  { path: '/', component: List },
  { 
    path: '/about',
    beforeEnter: [autentication],
    component: () => import('../pokemon/pages/About.vue') 
  },
  { 
    path: '/:id',
    name: "Pokemon-id",// mejora la accesibilidad de las paginas
    props: (router) => {
      console.log(router)
      const id = Number(router.params.id)
      return  {
        id:id,
        nombre: "nombre",
      } 
    },
    component: () => import('../pokemon/pages/Pokemon.vue') 
  },
  { 
    path: '/:pathMach(.*)*',
    name: "error",
    component: () => import('../pokemon/pages/NotFound.vue') 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// router.beforeEach((to, from, next) =>{ // son argumentos parametrizados
//   console.log(to, from, next)
//   const autorizad = autentication()
//   autorizad? next():next({name: "error"})
// })

export default router