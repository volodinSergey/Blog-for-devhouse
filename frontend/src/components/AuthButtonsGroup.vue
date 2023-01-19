<template>
  <div class="auth-buttons">
    <template v-if="!isAuth">
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

    onClickRegisterButton() {
      this.$router.push({ name: this.$routes.REGISTER.name })
    },

    onClickLoginButton() {
      this.$router.push({ name: this.$routes.LOGIN.name })
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
