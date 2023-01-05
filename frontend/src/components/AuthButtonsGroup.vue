<template>
  <div class="auth-buttons">
    <button
      v-if="isAuth"
      class="auth-buttons__button"
      :to="{ name: 'loginView' }"
      @click="onLogout"
    >
      Logout
    </button>

    <template v-else>
      <router-link
        class="auth-buttons__button"
        :to="{ name: 'registerView' }"
        >Register
      </router-link>

      <router-link
        class="auth-buttons__button"
        :to="{ name: 'loginView' }"
        >Login
      </router-link>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AuthButtonsGroup',

  computed: {
    ...mapGetters({
      isAuth: 'isAuth',
    }),
  },

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
.auth-buttons {
  display: flex;
  gap: 20px;

  &__button {
    font-family: sans-serif;
    font-size: 1.3rem;
    color: #fff;
  }
}

.logout {
  background-color: blue;
  color: #fff;
}
</style>
