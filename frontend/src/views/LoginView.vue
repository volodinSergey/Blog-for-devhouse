<template>
  <div>
    <form
      @submit.prevent="onLogin"
      class="register-form"
    >
      <input
        v-model="identifier"
        type="text"
        placeholder="email...."
      />

      <input
        v-model="password"
        type="password"
        placeholder="password...."
      />

      <button
        class="register-button"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
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
    ...mapActions(['login']),

    async onLogin() {
      const loginData = {
        identifier: this.identifier,
        password: this.password,
      }

      await this.login(loginData)

      this.$router.push({ name: 'homeView' })
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

.register-form {
  display: grid;
  gap: 20px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: 300px;
}

.register-button {
  background-color: #0016d9;
  padding: 6px;
  border-radius: 10px;
  transition: 0.2s;
  color: #fff;
}

.register-button:hover {
  opacity: 0.8;
}
</style>
