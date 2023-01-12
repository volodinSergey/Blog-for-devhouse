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

        <span class="author-info-name">{{ post.author.name }}</span>
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

    <!-- <div class="post-item__actions">
      <PostLike
        @click="liking"
        :postId="post.id"
      />
      <PostDelete
        v-if="isAuth && currentUserId == post.authorId"
        :postId="post.id"
      />
    </div> -->

    <div class="post-item__comments-section">
      <!-- <button
        class="show-comments-button"
        v-show="post.comments?.length"
        @click="toggleCommentsShowing"
      >
        {{ toggleCommentsButtonText }}
      </button> -->

      <CommentsList
        v-if="post.comments?.length"
        :comments="post.comments"
      />

      <FormAddComment v-if="isAuth" />
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import CommentsList from '@/components/CommentsList.vue'
import FormAddComment from '@/components/FormAddComment.vue'
// import PostLike from './PostLike.vue'
// import PostDelete from './PostDelete.vue'

export default {
  name: 'PostsListItem',

  components: {
    // PostLike,
    // PostDelete,
    CommentsList,
    FormAddComment,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters(['isAuth', 'currentUserId']),

    fullPostImageUrl() {
      const baseUrl = 'http://localhost:1337'

      return `${baseUrl}${this.post.image}`
    },

    fullAvatarUrl() {
      const baseUrl = 'http://localhost:1337'

      if (this.post.author.avatar) return `${baseUrl}${this.post.author.avatar}`

      return false
    },

    // toggleCommentsButtonText() {
    //   if (this.commentsShowed) return 'Hide comments'

    //   return 'Show comments'
    // },
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

    // toggleCommentsShowing() {
    //   this.commentsShowed = !this.commentsShowed
    // },
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
    border-radius: 10px;
  }

  &__actions {
    display: inline-flex;
    gap: 25px;
    margin-bottom: 1rem;
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

.show-comments-button {
  display: block;
  font-size: 1.2rem;
  padding: 8px;
  margin-bottom: 5px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  color: #fff;
  transition: 0.2s;
  width: 100%;
  text-align: left;

  @media (any-hover: hover) {
    &:hover {
      background-color: #00000026;
    }
  }
}
</style>
