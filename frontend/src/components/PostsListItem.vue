<template>
  <li class="post-item">
    <div class="post-item__left">
      <div
        class="post-item__author-info author-info"
        @click="goToAuthorPage"
      >
        <BaseAvatar
          :imagePath="post.author.avatar"
          width="50"
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
      <PostLike :postId="post.id" />

      <PostDelete
        v-if="(isAuth && currentUserId === post.author.id) || isAdmin"
        :postId="post.id"
        @post-deleted="postDeleted"
      />
    </div>

    <div class="post-item__comments-section">
      <CommentsList
        v-if="comments"
        :comments="comments"
        @comment-deleted="handleDeletingComment"
      />

      <FormAddComment
        v-if="isAuth"
        :post-id="post.id"
        @comment-added="handleAddingComment"
      />
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

import CommentsList from '@/components/CommentsList.vue'
import FormAddComment from '@/components/FormAddComment.vue'
import PostLike from '@/components/PostLike.vue'
import PostDelete from '@/components/PostDelete.vue'
import { getterTypes } from '@/store/modules/auth/auth.module.types'

export default {
  name: 'PostsListItem',

  components: {
    PostLike,
    PostDelete,
    CommentsList,
    FormAddComment,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },

    data() {
      return {
        comments: [],
      }
    },
  },

  created() {
    this.comments = this.post.comments
  },

  computed: {
    ...mapGetters({
      isAuth: getterTypes.isAuth,
      currentUserId: getterTypes.currentUserId,
      isAdmin: getterTypes.isAdmin,
    }),

    fullPostImageUrl() {
      const baseUrl = 'http://localhost:1337'

      return `${baseUrl}${this.post.image}`
    },
  },

  methods: {
    goToAuthorPage() {
      this.$router.push({ name: this.$routes.USER.name, params: { id: this.post.author.id } })
    },

    handleAddingComment(createdComment) {
      this.comments.push(createdComment)
    },

    handleDeletingComment(index) {
      this.$delete(this.comments, index)
    },

    postDeleted() {
      this.$emit('post-deleted')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/shared/styles/mixins';

.post-item {
  padding: 15px;
  border: 1px solid #23243e;
  background-color: #16182d;
  border-radius: 0.9rem;

  &__title {
    font-size: adaptive(rem(16), rem(20));
    margin-bottom: em(25, 20);
  }

  &__body {
    font-size: 1rem;
    color: #c5c5c5;
    margin-bottom: em(25, 16);
  }

  &__image {
    width: 100%;
    margin-bottom: 15px;
    border-radius: 10px;
  }

  &__actions {
    display: inline-flex;
    gap: 20px;
    margin-bottom: 1rem;
  }
}

.author-info {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
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
