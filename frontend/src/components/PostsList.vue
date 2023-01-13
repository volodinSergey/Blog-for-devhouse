<template>
  <ul class="posts-list">
    <PostsListItem
      v-for="(post, index) in globalPosts"
      :key="post.id"
      :post="post"
      @post-deleted="handleDeletingPost(index)"
    />
  </ul>
</template>

<script>
import PostsListItem from './PostsListItem.vue'

export default {
  name: 'PostsList',

  props: {
    posts: {
      type: Array,
    },
  },

  data() {
    return {
      globalPosts: this.posts,
    }
  },

  components: {
    PostsListItem,
  },

  methods: {
    handleDeletingPost(index) {
      this.$delete(this.globalPosts, index)
    },
  },
}
</script>

<style lang="scss" scoped>
.posts-list {
  display: grid;
  gap: 1.5rem;
  flex-basis: 40%;
  border-radius: 0.9rem;

  @media (max-width: 720px) {
    flex-basis: 100%;
  }

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ababab12;
    border-radius: 10px;
  }
}
</style>
