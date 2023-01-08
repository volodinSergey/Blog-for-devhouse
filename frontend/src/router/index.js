import Vue from 'vue'
import VueRouter from 'vue-router'

// import authModule from '@/store/modules/auth.module'

import RegisterView from '@/views/RegisterView'
import LoginView from '@/views/LoginView'
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
    path: '/posts',
    name: 'postsView',
    component: PostsView
  },

  {
    path: '/users/:id',
    name: 'userView',
    component: () => import('@/views/UserView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// const isAuth = authModule.getters.isAuth

// router.beforeEach((to, from, next) => {
//   const isRouteRequiresAuth = to.matched.some(routeRecord => routeRecord.meta.auth)

//   if (isRouteRequiresAuth && !isAuth) {

//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
