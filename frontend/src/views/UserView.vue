<template>
  <section class="user-page">
    <div class="container">
      <div class="user-page__box">
        <UserDetailsPanel
          :username="user.username"
          :avatar="user.avatar"
        />
      </div>
    </div>
  </section>
</template>

<script>
import UsersService from '@/services/usersService/Users.service'

import UserDetailsPanel from '@/components/UserDetailsPanel.vue'

export default {
  name: 'UserView',

  components: {
    UserDetailsPanel,
  },

  data() {
    return {
      user: {},
    }
  },

  created() {
    UsersService.getOne(this.$route.params.id).then(user => (this.user = user))
  },
}
</script>

<style lang="scss" scoped>
.user-page {
  &__box {
    padding: 2rem;
    border: 1px solid #23243e;
    border-radius: 10px;
  }
}
.container {
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
