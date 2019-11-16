import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Activities from '../views/Activities.vue'
import Contact from '../views/Contact.vue'
import LogIn from '../views/Login.vue'

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
    name: 'contact',
    component: Contact
  },
  {
    path: '/activities',
    name: 'activities',
    component: Activities
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  }
]

const router = new VueRouter({
  routes
})

export default router
