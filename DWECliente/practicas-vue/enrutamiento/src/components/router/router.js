import {createRouter, createWebHashHistory} from "vue-router"
import List from '../pokemon/pages/List.vue'

const routes = [
  { path: '/', component: List },
  { 
    path: '/about',
    component: () => import('../pokemon/pages/About.vue') 
  },
  { 
    path: '/id',
    component: () => import('../pokemon/pages/Pokemon.vue') 
  },
  { 
    path: '/:pathMach(.*)*',
    component: () => import('../pokemon/pages/NotFound.vue') 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router