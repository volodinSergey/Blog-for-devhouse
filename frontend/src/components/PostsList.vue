<template>
  <ul class="posts-list">
    <PostsListItem />
    <PostsListItem />
    <PostsListItem />
  </ul>
</template>

<script>
import PostsListItem from './PostsListItem.vue'
export default {
  name: 'PostsList',

  components: {
    PostsListItem,
  },
}
</script>

<style lang="scss" scoped>
.posts-list {
  display: grid;
  gap: 1.5rem;
}
</style>
