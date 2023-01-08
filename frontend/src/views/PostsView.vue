<template>
  <section class="posts">
    <div class="container">
      <div class="posts__box">
        <PostsList
          v-if="posts"
          :posts="posts"
        />
        <span v-else>No posts here</span>

        <PostsActions />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PostsList from '@/components/PostsList.vue'
import PostsActions from '@/components/PostsActions.vue'

export default {
  name: 'PostsView',

  components: {
    PostsList,
    PostsActions,
  },

  created() {
    this.getAllPosts()
  },

  computed: {
    ...mapGetters(['posts']),
  },

  methods: {
    ...mapActions(['getAllPosts']),
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
