<template>
  <section class="users">
    <div class="container">
      <h1 class="heading">All users</h1>

      <UsersList
        :users="users"
        @user-deleted="handleDeletingUser"
      />
    </div>
  </section>
</template>

<script>
import UsersService from '@/services/usersService/Users.service'

import UsersList from '@/components/UsersList.vue'

export default {
  name: 'UsersView',

  components: {
    UsersList,
  },

  data() {
    return {
      users: [],
    }
  },

  created() {
    UsersService.getAll().then(usersData => (this.users = usersData))
  },

  methods: {
    handleDeletingUser(index) {
      this.$delete(this.users, index)
    },
  },
}
</script>

<style lang="scss" scoped>
.users {
  padding-top: 1rem;
}

.heading {
  margin-bottom: 1rem;
}
</style>
