import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterView from '@/views/RegisterView'
import HomeView from '@/views/HomeView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'registerView',
    component: RegisterView
  },

  {
    path: '/home',
    name: 'homeView',
    component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
