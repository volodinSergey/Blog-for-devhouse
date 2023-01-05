<template>
  <ul class="posts-list">
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
  flex-basis: 40%;
  overflow-y: auto;
  max-height: 90vh;
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
