<template>
  <section class="posts">
    <div class="container">
      <div class="posts__box">
        <div class="posts__box-posts-container">
          <PostsList
            v-if="filteredPosts?.length"
            :postsData="filteredPosts"
            @post-deleted="handleDeletingPost"
          />

          <span v-else>No posts here</span>
        </div>

        <div class="posts__box-posts-interactivity">
          <BaseSearch
            v-model.trim="searchValue"
            placeholder="Type post text to search..."
          />

          <BaseSelect
            :options="options"
            @option-selected="handleSelectingOption"
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

      selectedOptionValue: '',

      options: [
        { name: 'all', value: '' },
        { name: 'description', value: 'body' },
        { name: 'title', value: 'title' },
      ],
    }
  },

  created() {
    PostsService.getAll().then(posts => (this.posts = posts))
  },

  computed: {
    sortedPosts() {
      if (!this.selectedOptionValue) return this.posts

      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedOptionValue]?.localeCompare(post2[this.selectedOptionValue])
      })
    },

    filteredPosts() {
      return this.sortedPosts.filter(post => {
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

    handleSelectingOption(selectedOptionValue) {
      this.selectedOptionValue = selectedOptionValue
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/shared/styles/mixins.scss';

.posts {
  &__box {
    padding-top: 20px;
    display: flex;
    gap: 20px;

    &-posts-container,
    &-posts-interactivity {
      flex-basis: 50%;
    }

    @media (max-width: 720px) {
      flex-wrap: wrap;
    }

    &-posts-interactivity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>
