import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Activities from '../views/Activities.vue'
import Contact from '@/components/Contact'
import Stories from '../views/Stories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/activities',
    name: 'activities',
    component: Activities
  },
  {
    path: '/stories',
    name: 'stories',
    component: Stories
  }
]

const router = new VueRouter({
  routes
})

export default router
