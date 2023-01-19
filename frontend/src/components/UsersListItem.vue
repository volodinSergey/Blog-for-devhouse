<template>
  <li class="users-list-item">
    <router-link
      :to="{ name: this.$routes.USER.name, params: { id: id } }"
      class="users-list-item__left-box"
    >
      <BaseAvatar
        :imagePath="avatar"
        width="40"
      />

      <span class="user-name">{{ name }}</span>
    </router-link>

    <div class="users-list-item__right-box">
      <BaseButton
        v-if="isAdmin"
        @click="onDeleteUser"
      >
        Delete
      </BaseButton>
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
@import '@/shared/styles/mixins.scss';

.users-list-item {
  display: flex;
  padding: 5px;
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

.user-name {
  font-size: adaptive(rem(12), rem(16));
}
</style>
