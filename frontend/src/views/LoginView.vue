<template>
  <section class="login">
    <div class="container">
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

        <button
          class="login-button"
          type="submit"
        >
          Login
        </button>
      </form>
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
input {
  background-color: #23243e;
  color: #fff;
  padding: 8px;
  border: 3px solid transparent;
  border-radius: 10px;
  transition: 0.3s;
  outline: none;
}

input:focus {
  border: 3px solid #0016d9;
}

input::placeholder {
  color: #9ca0d2;
}

.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  gap: 20px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: 300px;
}

.login-button {
  background-color: #0016d9;
  padding: 6px;
  border-radius: 10px;
  transition: 0.2s;
  color: #fff;
}

.login-button:hover {
  opacity: 0.8;
}
</style>
