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
import { actionTypes, getterTypes } from '@/store/modules/auth/auth.module.types'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AuthButtonsGroup',

  computed: {
    ...mapGetters({
      isAuth: getterTypes.isAuth,
    }),
  },

  methods: {
    ...mapActions({
      LOGOUT: actionTypes.LOGOUT,
    }),

    onClickLogoutButton() {
      this.LOGOUT()

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
