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

    <div class="post-item__actions">
      <PostLike
        @click="liking"
        :postId="post.id"
      />
      <PostDelete
        v-if="isAuth && currentUserId == post.authorId"
        :postId="post.id"
      />
    </div>

    <div class="post-item__comments-section">
      <button
        class="show-comments-button"
        v-show="post.comments?.length"
        @click="toggleCommentsShowing"
      >
        {{ toggleCommentsButtonText }}
      </button>

      <CommentsList
        v-if="post.comments?.length"
        :commentsShowed="commentsShowed"
        :comments="post.comments"
      />

      <form class="add-comment-form">
        <BaseTextField placeholder="Add your comment" />
        <BaseButtton>
          <svg
            class="add-comment-icon"
            width="64px"
            height="64px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#af7474"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
            />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.144"
            />

            <g id="SVGRepo_iconCarrier">
              <g id="style=linear">
                <g id="email">
                  <path
                    id="vector"
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    stroke="#242bff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="vector_2"
                    d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                    stroke="#242bff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </g>
              </g>
            </g></svg
        ></BaseButtton>
      </form>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import CommentsList from './CommentsList.vue'
import PostLike from './PostLike.vue'
import PostDelete from './PostDelete.vue'

export default {
  name: 'PostsListItem',

  components: {
    PostLike,
    PostDelete,
    CommentsList,
  },

  data() {
    return {
      commentsShowed: false,
    }
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

    toggleCommentsButtonText() {
      if (this.commentsShowed) return 'Hide comments'

      return 'Show comments'
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

    toggleCommentsShowing() {
      this.commentsShowed = !this.commentsShowed
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

.add-comment-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
  border: 1px solid #23243e;
  border-radius: 10px;
  gap: 1rem;
  margin-top: 1rem;
}

.add-comment-icon {
  width: 40px;
  height: 40px;
  stroke: red;
  cursor: pointer;
}
</style>
