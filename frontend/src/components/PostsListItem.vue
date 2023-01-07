<template>
  <li class="post-item">
    <div class="post-item__left">
      <div class="post-item__author-info author-info">
        <img
          class="author-info__avatar"
          :src="fullAvatarUrl"
          alt="author avatar"
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
        class="post-item__image"
        :src="fullPostImageUrl"
        alt="post image"
      />
    </div>

    <PostLike
      @click="liking"
      :postId="post.id"
    />
  </li>
</template>

<script>
import { mapActions } from 'vuex'

import PostLike from './PostLike.vue'

export default {
  name: 'PostsListItem',

  components: {
    PostLike,
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    fullPostImageUrl() {
      const baseUrl = 'http://localhost:1337'

      return `${baseUrl}${this.post.image}`
    },

    fullAvatarUrl() {
      const baseUrl = 'http://localhost:1337'

      return `${baseUrl}${this.post.authorAvatar}`
    },
  },

  methods: {
    ...mapActions(['like']),

    liking(likeStatus) {
      const likeStatusPayload = {
        postId: this.post.id,
        likeStatus: likeStatus,
      }

      this.like(likeStatusPayload)
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
}

.author-info {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;

  &__avatar {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
}
</style>
