<template>
  <div id="app">
    <div class="container">
      <TheHeader />

      <router-view :key="$route.fullPath"></router-view>
    </div>
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
* {
  margin: 0;
  padding: 0;
}

input,
button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  object-fit: cover;
}

ul {
  list-style: none;
}

body {
  background-color: #090a1a;
  color: rgb(87, 249, 255);
  font-family: sans-serif;
  color: #fff;
}
</style>
