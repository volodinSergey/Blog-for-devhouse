<template>
  <div class="auth-buttons">
    <BaseButton
      v-if="isAuth"
      @click="onClickLogoutButton"
    >
      Logout
    </BaseButton>

    <template v-else>
      <BaseButton @click="onClickRegisterButton"> Register </BaseButton>

      <BaseButton @click="onClickLoginButton"> Login </BaseButton>
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
}
</style>
