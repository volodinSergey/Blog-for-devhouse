<template>
  <div>
    <form
      @submit.prevent="onRegister"
      class="register-form"
    >
      <BaseTextField
        v-model="username"
        placeholder="name...."
      />

      <BaseTextField
        v-model="email"
        placeholder="email...."
      />

      <BaseTextField
        type="password"
        v-model="password"
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
</template>

<script>
import { mapActions } from 'vuex'

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
    ...mapActions(['register']),

    async onRegister() {
      const registrationData = {
        username: this.username,
        email: this.email,
        password: this.password,
      }

      await this.register(registrationData)

      this.$router.push({ name: 'postsView' })
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
