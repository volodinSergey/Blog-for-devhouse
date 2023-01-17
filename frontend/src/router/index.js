import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from '@/router/routes/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach(async (to, from, next) => {
  const isRequiresAuth = to.matched.some(record => record.meta.auth)
  const isRequiresAdminRoots = to.matched.some(record => record.meta.admin)

  const authGuardsArray = to.meta.guards

  if (!authGuardsArray) return next()

  const context = {
    isRequiresAuth,
    isRequiresAdminRoots,
    next
  }

  return authGuardsArray[0]({ ...context })
})

export default router
