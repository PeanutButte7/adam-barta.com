import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/Navbar.vue'
import Portfolio from '../views/Portfolio.vue'
import Contacts from '../views/Contacts.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'navbar',
    component: Navbar
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
