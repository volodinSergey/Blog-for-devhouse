<template>
  <div
    class="user-actions"
    :class="{ 'user-actions--opened': isUserActionsOpened }"
  >
    <router-link
      class="user-actions__action"
      :to="{ name: this.$routes.USERS.name }"
    >
      All users
    </router-link>

    <router-link
      class="user-actions__action"
      :to="{ name: this.$routes.USER.name, params: { id: userId } }"
    >
      To profile
    </router-link>

    <span
      class="user-actions__action"
      @click="onLogout"
    >
      Logout
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { actionTypes } from '@/store/modules/auth/auth.module.types'

export default {
  name: 'TheHeaderUserActions',

  props: {
    userId: {
      type: Number,
      required: true,
    },

    isUserActionsOpened: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    ...mapActions({
      LOGOUT: actionTypes.LOGOUT,
    }),

    onLogout() {
      this.LOGOUT()

      this.$router.push({ name: this.$routes.LOGIN.name })

      this.$emit('user-actions-closed', false)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/shared/styles/mixins.scss';

$bgColor: #320e8b;

.user-actions {
  position: absolute;
  display: none;
  flex-direction: column;
  width: rem(110);
  background-color: $bgColor;
  top: rem(50);
  border-radius: rem(8);
  z-index: 100;

  &--opened {
    display: flex;
  }

  &__action {
    padding: em(7, 20) em(10, 20);
    font-size: adaptive(rem(17), rem(20));
    transition: 0.2s;

    &:first-child {
      border-top-left-radius: rem(8);
      border-top-right-radius: rem(8);
    }

    &:last-child {
      border-bottom-left-radius: rem(8);
      border-bottom-right-radius: rem(8);
    }

    &:hover {
      background-color: #3d13a7;
    }
  }
}
</style>
