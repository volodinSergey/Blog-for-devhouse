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
            v-if="this.userPosts?.length"
            :posts="this.userPosts"
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
import PostsService from '@/services/postsService/Posts.service'

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
      userPosts: [],
    }
  },

  created() {
    UsersService.getOne(this.$route.params.id).then(userInfo => (this.userInfo = userInfo))

    PostsService.getUserPosts(this.$route.params.id).then(userPosts => (this.userPosts = userPosts))
  },

  methods: {
    setPosts(newPostData) {
      this.userPosts = [newPostData, ...this.userPosts]
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
