<template>
  <section class="register">
    <div class="container">
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

        <button
          class="register-button"
          type="submit"
        >
          Register
        </button>
      </form>
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

.register-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  gap: 20px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: rem(250);
}

.register-button {
  background-color: #888;
  padding: 6px;
  border-radius: 10px;
  transition: 0.2s;
  color: #fff;
}

.register-button:hover {
  opacity: 0.8;
}
</style>
