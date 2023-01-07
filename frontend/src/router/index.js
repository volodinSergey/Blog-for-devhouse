import Vue from 'vue'
import VueRouter from 'vue-router'

import RegisterView from '@/views/RegisterView'
import LoginView from '@/views/LoginView'
import HomeView from '@/views/HomeView'
import PostsView from '@/views/PostsView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'postsView',
    component: PostsView
  },

  {
    path: '/login',
    name: 'loginView',
    component: LoginView
  },

  {
    path: '/register',
    name: 'registerView',
    component: RegisterView
  },

  {
    path: '/home',
    name: 'homeView',
    component: HomeView
  },

  {
    path: '/posts',
    name: 'postsView',
    component: PostsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
