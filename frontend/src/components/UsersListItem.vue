<template>
  <li class="users-list-item">
    <router-link
      :to="{ name: 'userView', params: { id: id } }"
      class="users-list-item__left-box"
    >
      <img
        class="user-avatar"
        v-if="fullAvatarUrl"
        :src="fullAvatarUrl"
        alt="user avatar"
      />
      <img
        class="user-avatar"
        v-else
        src="@/assets/no-avatar.jpg"
        alt="user avatar"
      />

      <span>{{ name }}</span>
    </router-link>

    <div class="users-list-item__right-box">
      <BaseButton
        v-if="isAdmin"
        @click="onDeleteUser"
        >Delete user</BaseButton
      >
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

import UsersService from '@/services/usersService/Users.service'
import { getterTypes } from '@/store/modules/auth/auth.module.types'

export default {
  name: 'UsersListItem',

  props: {
    id: {
      type: Number,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
    },
  },

  computed: {
    ...mapGetters({
      isAdmin: getterTypes.isAdmin,
    }),

    fullAvatarUrl() {
      const baseUrl = 'http://localhost:1337'

      if (this.avatar) return `${baseUrl}${this.avatar}`

      return false
    },
  },

  methods: {
    async onDeleteUser() {
      await UsersService.deleteUser(this.id)

      this.$emit('user-deleted')
    },
  },
}
</script>

<style lang="scss" scoped>
.users-list-item {
  display: flex;
  padding: 15px;
  border: 1px solid #23243e;
  background-color: #16182d;
  border-radius: 0.9rem;

  &__left-box {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
  }

  &__right-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    padding-right: 10px;
  }
}
.user-avatar {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
}
</style>
