<template>
  <router-link
    v-if="isAuth"
    :to="{ name: 'userView', params: { id: currentUser.id } }"
    class="user-info"
  >
    <img
      v-if="fullAvatarUrl"
      class="user-info__avatar"
      :src="fullAvatarUrl"
      alt="user avatar"
    />
    <img
      v-else
      class="user-info__avatar"
      src="@/assets/no-avatar.jpg"
      alt="user avatar"
    />

    <span class="user-info__name">{{ currentUser.username }}</span>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
import { getterTypes } from '@/store/modules/auth/auth.module.types'

export default {
  name: 'TheHeaderUserInfoPanel',

  computed: {
    ...mapGetters({
      isAuth: getterTypes.isAuth,
      currentUser: getterTypes.currentUser,
    }),

    fullAvatarUrl() {
      const baseUrl = 'http://localhost:1337'
      if (this.currentUser?.avatar?.url) return `${baseUrl}${this.currentUser?.avatar?.url}`

      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;

  &__avatar {
    width: 40px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
}
</style>
