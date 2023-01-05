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

export default {
  name: 'App',

  components: {
    TheHeader,
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

ul {
  list-style: none;
}

body {
  background-color: #090a1a;
  color: rgb(87, 249, 255);
  /*display: grid;
  min-height: 100vh;
  place-items: center; */
}
</style>
