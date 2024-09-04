import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Starships from '../views/Starships.vue'
import Search from '../views/Search.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Main },
    { path: '/starships', component: Starships },
    { path: '/search', component: Search }
  ]
})

export default router
