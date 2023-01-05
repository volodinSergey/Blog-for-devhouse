<template>
  <section class="posts">
    <div class="container">
      <div class="posts__box">
        <PostsList />
      </div>
    </div>
  </section>
</template>

<script>
import PostsList from '@/components/PostsList.vue'

export default {
  name: 'PostsView',

  components: {
    PostsList,
  },
}
</script>

<style lang="scss" scoped>
.posts {
  &__box {
    padding-top: 20px;
  }
}

.container {
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
