<template>
  <section class="user-page">
    <div class="container">
      <div class="user-page__box user-box">
        <UserDetailsPanel
          :username="user.username"
          :avatar="user.avatar"
        />

        <FormAddPost v-if="isAuth && currentUserId == user.id" />

        <BasePostsListTitle> User news {{ user.username }} </BasePostsListTitle>

        <div class="user-box__content">
          <PostsList
            v-if="user.posts?.length"
            :posts="user.posts"
          />
          <div v-else>No posts here</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import UsersService from '@/services/usersService/Users.service'

import PostsList from '@/components/PostsList.vue'
import UserDetailsPanel from '@/components/UserDetailsPanel.vue'
import FormAddPost from '@/components/FormAddPost.vue'

export default {
  name: 'UserView',

  components: {
    UserDetailsPanel,
    PostsList,
    FormAddPost,
  },

  data() {
    return {
      user: {},
    }
  },

  created() {
    UsersService.getOne(this.$route.params.id).then(user => (this.user = user))
  },

  computed: {
    ...mapGetters(['isAuth', 'currentUserId']),
  },
}
</script>

<style lang="scss" scoped>
.user-page {
  &__box {
    padding: 0 2rem 2rem 2rem;
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
