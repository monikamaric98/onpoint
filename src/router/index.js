import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Naslovnica',
    component: Home
  },
  {
    path: '/Kontakt',
    name: 'Kontakt',
    
    component: () => import( '../views/Kontakt.vue')
  },
  {
    path: '/Profili',
    name: 'Profili',
    
    component: () => import( '../views/Profili.vue')
  },
  {
    path: '/Last',
    name: 'LastChance',
    
    component: () => import( '../views/Last.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
