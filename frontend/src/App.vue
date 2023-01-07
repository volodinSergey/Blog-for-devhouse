<template>
  <div id="app">
    <div class="container">
      <TheHeader />

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

import { mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    TheHeader,
  },

  created() {
    if (localStorage.getItem('jwt')) {
      this.getMe()
    }
  },

  methods: {
    ...mapActions(['getMe']),
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
  overflow: hidden;
}
</style>
