<template>
  <div id="app">
    <TheHeader />

    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

import { mapActions } from 'vuex'
import { actionTypes } from '@/store/modules/auth/auth.module.types'

export default {
  name: 'App',

  components: {
    TheHeader,
  },

  created() {
    if (localStorage.getItem('jwtToken')) this.GET_CURRENT_USER()
  },

  methods: {
    ...mapActions({
      GET_CURRENT_USER: actionTypes.GET_CURRENT_USER,
    }),
  },
}
</script>

<style lang="scss">
@import '@/shared/styles/main.scss';

#app {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
