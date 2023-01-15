import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth.module'
import likes from '@/store/modules/likes/likes.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    likes
  },
})
