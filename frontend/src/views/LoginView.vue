<template>
  <section class="login">
    <div class="container">
      <div class="login__box">
        <form
          @submit.prevent="onLogin"
          class="login-form"
        >
          <BaseTextField
            v-model.trim="identifier"
            placeholder="email...."
          />

          <BaseTextField
            type="password"
            v-model.trim="password"
            placeholder="password...."
          />

          <BaseButton class="login-button">Login</BaseButton>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { actionTypes } from '@/store/modules/auth/auth.module.types'
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',

  data() {
    return {
      identifier: '',
      password: '',
    }
  },

  methods: {
    ...mapActions({
      LOGIN: actionTypes.LOGIN,
    }),

    async onLogin() {
      const loginData = {
        identifier: this.identifier,
        password: this.password,
      }

      await this.LOGIN(loginData)

      this.$router.push({ name: this.$routes.POSTS.name })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/shared/styles/mixins.scss';

.login__box {
  display: grid;
  padding-top: 20%;

  @media (min-width: 475px) {
    place-items: center;
  }
}

.login-form {
  display: grid;
  gap: rem(20);
  padding: rem(20);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: rem(10);
  min-width: 40%;
}
</style>
