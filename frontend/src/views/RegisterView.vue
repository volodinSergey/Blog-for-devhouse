<template>
  <section class="register">
    <div class="container">
      <div class="register__box">
        <form
          @submit.prevent="onRegister"
          class="register-form"
        >
          <BaseTextField
            v-model.trim="username"
            placeholder="name...."
          />

          <BaseTextField
            v-model.trim="email"
            placeholder="email...."
          />

          <BaseTextField
            type="password"
            v-model.trim="password"
            placeholder="password...."
          />

          <BaseButton>Register</BaseButton>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { actionTypes } from '@/store/modules/auth/auth.module.types'

export default {
  name: 'RegisterView',

  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },

  methods: {
    ...mapActions({
      REGISTER: actionTypes.REGISTER,
    }),

    async onRegister() {
      const registrationData = {
        username: this.username,
        email: this.email,
        password: this.password,
      }

      await this.REGISTER(registrationData)

      this.$router.push({ name: this.$routes.POSTS.name })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/shared/styles/mixins.scss';

.register__box {
  display: grid;
  padding-top: 20%;

  @media (min-width: 475px) {
    place-items: center;
  }
}

.register-form {
  display: grid;
  gap: rem(20);
  padding: rem(20);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: rem(10);
  min-width: 40%;
}
</style>
