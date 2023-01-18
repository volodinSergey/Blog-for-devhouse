import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import useUiKit from '@/shared/ui/index'

Vue.config.productionTip = false

useUiKit()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
