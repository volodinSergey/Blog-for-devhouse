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

        <BaseSearch
          v-model.trim="searchValue"
          placeholder="Type post text to search"
          style="width: 50%; margin-bottom: 10px"
        />

        <div class="user-box__content">
          <PostsList
            v-if="filteredPosts?.length"
            :postsData="filteredPosts"
            @post-deleted="handleDeletingPost"
          />

          <div v-else>No posts here yet ....</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { getterTypes } from '@/store/modules/auth/auth.module.types'

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
      searchValue: '',
    }
  },

  created() {
    UsersService.getOne(this.$route.params.id).then(userInfo => (this.userInfo = userInfo))

    PostsService.getUserPosts(this.$route.params.id).then(userPosts => (this.userPosts = userPosts))
  },

  computed: {
    ...mapGetters({
      isAuth: getterTypes.isAuth,
      currentUserId: getterTypes.currentUserId,
    }),

    filteredPosts() {
      return this.userPosts.filter(post => {
        const normalizedPostBody = post.body.toLowerCase()
        const normalizedSearchValue = this.searchValue.toLowerCase()

        return normalizedPostBody.includes(normalizedSearchValue)
      })
    },
  },

  methods: {
    setPosts(newPostData) {
      this.userPosts.push(newPostData)
    },

    handleDeletingPost(index) {
      this.$delete(this.userPosts, index)
    },
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
</style>
