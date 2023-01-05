<template>
  <div class="auth-buttons">
    <BaseButton
      v-if="isAuth"
      :to="{ name: 'loginView' }"
      @click="onClickLogoutButton"
    >
      Logout
    </BaseButton>

    <template v-else>
      <BaseButton @click="onClickRegisterButton"> Register </BaseButton>

      <BaseButton @click="onCLickLoginButton"> Login </BaseButton>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'AuthButtonsGroup',

  components: {
    BaseButton,
  },

  computed: {
    ...mapGetters({
      isAuth: 'isAuth',
    }),
  },

  methods: {
    ...mapActions(['logout']),

    onClickLogoutButton() {
      this.logout()

      this.$router.push({ name: 'loginView' })
    },

    onClickRegisterButton() {
      this.$router.push({ name: 'registerView' })
    },

    onClickLoginButton() {
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
