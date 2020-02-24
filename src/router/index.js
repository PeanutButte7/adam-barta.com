import Vue from 'vue'
import VueRouter from 'vue-router'
import GPFC from '@/views/projects/GPFC.vue'
import Portfolio from '@/views/Projects.vue'
import Contacts from '@/views/Contacts.vue'
import About from '@/views/About.vue'
import Skills from "@/views/Skills";

Vue.use(VueRouter)

const routes = [
  {
    path: '/projects',
    name: 'projects',
    component: Portfolio
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/gpfc',
    name: 'gpfc',
    component: GPFC
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
