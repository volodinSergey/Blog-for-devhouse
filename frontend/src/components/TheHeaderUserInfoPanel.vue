<template>
  <div
    v-if="isAuth"
    class="user-info"
    @click="onToggleOpeningUserActions"
  >
  
    <span class="user-info__name">{{ currentUser?.username }}</span>

    <BaseAvatar
      :imagePath="currentUser.avatar"
      width="40"
    />

    <TheHeaderUserActions
      :userId="currentUser.id"
      :isUserActionsOpened="isUserActionsOpened"
      @user-actions-closed="handleUserActionsClosing"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getterTypes } from '@/store/modules/auth/auth.module.types'

import TheHeaderUserActions from './TheHeaderUserActions.vue'

export default {
  name: 'TheHeaderUserInfoPanel',

  components: {
    TheHeaderUserActions,
  },

  data() {
    return {
      isUserActionsOpened: false,
    }
  },

  computed: {
    ...mapGetters({
      isAuth: getterTypes.isAuth,
      currentUser: getterTypes.currentUser,
    }),
  },

  methods: {
    onToggleOpeningUserActions() {
      this.isUserActionsOpened = !this.isUserActionsOpened
    },

    handleUserActionsClosing(signalToClose) {
      this.isUserActionsOpened = signalToClose
    },
  },
}
</script>

<style lang="scss" scoped>
.user-info {
  position: relative;
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;

  &__name {
    user-select: none;
  }
}
</style>
