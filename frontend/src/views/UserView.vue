<template>
  <section class="user-page">
    <div class="container">
      <div class="user-page__box user-box">
        <UserDetailsPanel
          :username="userInfo.username"
          :avatar="userInfo.avatar"
        />

        <FormAddPost
          v-if="isAuth && currentUserId == userInfo.id"
          @post-created="setPosts"
        />

        <BasePostsListTitle> User news {{ userInfo.username }} </BasePostsListTitle>

        <div class="user-box__content">
          <PostsList
            v-if="this.posts?.length"
            :posts="this.posts"
          />
          <div v-else>No posts here yet ....</div>
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
      userInfo: {},
      posts: [],
    }
  },

  created() {
    UsersService.getOne(this.$route.params.id).then(userData => {
      const { id, username, avatar, posts } = userData

      const userInfo = {
        id,
        username,
        avatar,
      }

      this.userInfo = userInfo

      const sortedPosts = posts.sort((prev, next) => next.id - prev.id)

      this.posts = sortedPosts
    })
  },

  methods: {
    setPosts(newPostData) {
      this.posts = [newPostData, ...this.posts]
    },
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
