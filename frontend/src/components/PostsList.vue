<template>
  <ul class="posts-list">
    <PostsListItem
      v-for="(post, index) in postsData"
      :key="post.id"
      :post="post"
      @post-deleted="postDeleted(index)"
    />
  </ul>
</template>

<script>
import PostsListItem from './PostsListItem.vue'

export default {
  name: 'PostsList',

  props: {
    postsData: {
      type: Array,
    },
  },

  components: {
    PostsListItem,
  },

  methods: {
    postDeleted(index) {
      this.$emit('post-deleted', index)
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
