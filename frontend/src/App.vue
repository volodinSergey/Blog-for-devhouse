<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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

body {
  background-color: #090a1a;
  color: rgb(87, 249, 255);
  display: grid;
  min-height: 100vh;
  place-items: center;
}
</style>
