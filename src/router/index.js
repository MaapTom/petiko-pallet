import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre-nos',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: Home
    }
  ]
})

export default router
