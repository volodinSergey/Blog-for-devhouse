<template>
  <li class="post-item">
    <div class="post-item__left">
      <div
        class="post-item__author-info author-info"
        @click="goToAuthorPage"
      >
        <img
          class="author-info__avatar"
          v-if="fullAvatarUrl"
          :src="fullAvatarUrl"
          alt="user avatar"
        />
        <img
          class="author-info__avatar"
          v-else
          src="@/assets/no-avatar.jpg"
          alt="user avatar"
        />

        <span class="author-info-name">{{ post.author }}</span>
      </div>

      <h2 class="post-item__title">{{ post.title }}</h2>

      <p class="post-item__body">
        {{ post.body }}
      </p>
    </div>

    <div class="post-item__right">
      <img
        v-if="post.image"
        class="post-item__image"
        :src="fullPostImageUrl"
        alt="post image"
      />
    </div>

    <div class="post-item__actions">
      <PostLike
        @click="liking"
        :postId="post.id"
      />
      <PostDelete
        v-if="isAuth"
        :postId="post.id"
      />
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PostLike from './PostLike.vue'
import PostDelete from './PostDelete.vue'

export default {
  name: 'PostsListItem',

  components: {
    PostLike,
    PostDelete,
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters(['isAuth']),

    fullPostImageUrl() {
      const baseUrl = 'http://localhost:1337'

      return `${baseUrl}${this.post.image}`
    },

    fullAvatarUrl() {
      const baseUrl = 'http://localhost:1337'

      if (this.post.authorAvatar) return `${baseUrl}${this.post.authorAvatar}`

      return false
    },
  },

  methods: {
    ...mapActions(['like']),

    liking(likeStatus) {
      const likeStatusPayload = {
        postId: this.post.id,
        likeStatus: likeStatus,
      }

      if (!this.isAuth) this.$router.push({ name: 'loginView' })

      this.like(likeStatusPayload)
    },

    goToAuthorPage() {
      this.$router.push({ name: 'userView', params: { id: this.post.authorId } })
    },
  },
}
</script>

<style lang="scss" scoped>
.post-item {
  padding: 15px;
  border: 1px solid #23243e;
  background-color: #16182d;
  border-radius: 0.9rem;

  &__title {
    margin-bottom: 25px;
  }

  &__body {
    color: #c5c5c5;
    margin-bottom: 20px;
  }

  &__image {
    width: 100%;
    margin-bottom: 15px;
  }

  &__actions {
    display: inline-flex;
    gap: 25px;
  }
}

.author-info {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;

  &__avatar {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
}
</style>
