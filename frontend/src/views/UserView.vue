<template>
  <section class="user-page">
    <div class="container">
      <div class="user-page__box user-box">
        <UserDetailsPanel
          :username="user.username"
          :avatar="user.avatar"
        />

        <div class="user-box__content">
          <PostsList :posts="user.posts" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UsersService from '@/services/usersService/Users.service'

import PostsList from '@/components/PostsList.vue'
import UserDetailsPanel from '@/components/UserDetailsPanel.vue'

export default {
  name: 'UserView',

  components: {
    UserDetailsPanel,
    PostsList,
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
  }
}

.user-box__content {
  display: grid;
  grid-template-columns: 50% 1fr;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
}

.container {
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
