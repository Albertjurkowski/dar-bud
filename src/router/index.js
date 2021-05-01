import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import drogiGruntowe from "../views/drogiGruntowe.vue";
import kontakt from "../views/kontakt";
import wykopy from "../views/wykopy"
import rozbiorka from "../views/rozbiorki.vue"
import urzadzenia from "../views/urzadzenia.vue"
import kruszce from "../views/kruszce.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drogi-gruntowe',
    name: 'drogi-gruntowe',
    component: drogiGruntowe
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: kontakt
  },

  {
    path: '/wykopy',
    name: 'wykopy',
    component: wykopy
  },
  {
    path: '/rozbiorki',
    name: 'rozbiorka',
    component: rozbiorka
  },
  {
    path: '/kruszce',
    name: 'kruszce',
    component: kruszce
  },
   {
    path: '/sprzet',
    name: 'urzadzenia',
    component: urzadzenia
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
