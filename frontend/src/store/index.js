import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth.module'
import posts from '@/store/modules/posts/posts.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    posts
  },
})
