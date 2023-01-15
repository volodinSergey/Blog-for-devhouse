<template>
  <ul class="users-list">
    <UsersListItem
      v-for="(user, index) in users"
      :key="user.id"
      :id="user.id"
      :name="user.name"
      :avatar="user.avatar"
      @user-deleted="userDeleted(index)"
    />
  </ul>
</template>

<script>
import UsersListItem from './UsersListItem.vue'

export default {
  name: 'UsersList',

  components: { UsersListItem },

  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  methods: {
    userDeleted(index) {
        this.$emit('user-deleted', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.users-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
