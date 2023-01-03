<template>
  <div class="home">
    <h1>Welcome to the site</h1>

    <button
      @click="onLogout"
      class="logout-button"
    >
      Logout
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomeView',

  methods: {
    ...mapActions(['logout']),

    onLogout() {
      this.logout()
      this.$router.push({ name: 'loginView' })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  font-size: 30px;
  font-family: sans-serif;
  color: #fff;
}

.logout-button {
  font-size: 25px;
  min-width: 100px;
  background-color: #0016d9;
  padding: 10px 20px;
  border-radius: 10px;
  transition: 0.2s;
  color: #fff;
}

.logout-button:hover {
  opacity: 0.8;
}
</style>
