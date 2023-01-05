<template>
  <section class="posts">
    <div class="container">
      <div class="posts__box">
        <PostsList />

        <PostsActions />
      </div>
    </div>
  </section>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import PostsActions from '@/components/PostsActions.vue'

export default {
  name: 'PostsView',

  components: {
    PostsList,
    PostsActions,
  },
}
</script>

<style lang="scss" scoped>
.posts {
  &__box {
    padding-top: 20px;
    display: flex;
    gap: 20px;

    @media (max-width: 720px) {
      flex-wrap: wrap;
    }
  }
}

.container {
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
