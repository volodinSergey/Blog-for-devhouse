<template>
  <section class="posts">
    <div class="container">
      <div class="posts__box">
        <div class="posts__box-left">
          <PostsList
            v-if="filteredPosts?.length"
            :postsData="filteredPosts"
            @post-deleted="handleDeletingPost"
          />

          <span v-else>No posts here</span>
        </div>

        <div class="posts__box-right">
          <input
            v-model.trim="searchValue"
            type="search"
            placeholder="What are you looking for ?..."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import PostsService from '@/services/postsService/Posts.service'

export default {
  name: 'PostsView',

  components: {
    PostsList,
  },

  data() {
    return {
      posts: [],
      searchValue: '',
    }
  },

  created() {
    PostsService.getAll().then(posts => (this.posts = posts))
  },

  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        const normalizedPostBody = post.body.toLowerCase()
        const normalizedSearchValue = this.searchValue.toLowerCase()

        return normalizedPostBody.includes(normalizedSearchValue)
      })
    },
  },

  methods: {
    handleDeletingPost(index) {
      this.$delete(this.posts, index)
    },
  },
}
</script>

<style lang="scss" scoped>
.posts {
  &__box {
    padding-top: 20px;
    display: flex;
    gap: 20px;

    &-left {
      flex-basis: 50%;
    }

    @media (max-width: 720px) {
      flex-wrap: wrap;
    }
  }
}

input {
  background-color: #23243e;
  color: #fff;
  padding: 10px;
  border: 3px solid transparent;
  border-radius: 10px;
  transition: 0.3s;
  outline: none;
  width: 200px;

  &::placeholder {
    color: #fff;
  }
}

.container {
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
