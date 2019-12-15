import Vue from 'vue'
import VueRouter from 'vue-router'
import GPFC from '../views/projects/GPFC.vue'
import Portfolio from '../views/Portfolio.vue'
import Contacts from '../views/Contacts.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/gpfc',
    name: 'gpfc',
    component: GPFC
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
