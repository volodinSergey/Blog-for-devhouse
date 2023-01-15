<template>
  <li class="comment-item">
    <div class="comment-item__left-box">
      <router-link :to="{ name: 'userView', params: { id: authorId } }">
        <img
          class="comment-item__avatar"
          v-if="fullAvatarUrl"
          :src="fullAvatarUrl"
          alt="user avatar"
        />
        <img
          class="comment-item__avatar"
          v-else
          src="@/assets/no-avatar.jpg"
          alt="user avatar"
        />
      </router-link>
    </div>

    <div class="comment-item__right-box">
      <div>
        <p class="comment-item__authorname">{{ authorname }}</p>

        <form
          @submit.prevent="onEdit"
          v-if="editMode"
        >
          <BaseTextField v-model="commentBody" />
          <button>edit</button>
        </form>
        <p
          v-else
          class="comment-item__body"
        >
          {{ commentBody }}
        </p>
      </div>

      <div class="comment-actions">
        <button
          v-if="isAuth && authorId === currentUserId"
          class="comment-actions__delete-comment-button"
          @click="onDeleteComment"
        >
          Delete
        </button>

        <button
          v-if="isAuth && authorId === currentUserId"
          @click="toggleEditCommentMode"
          class="comment-actions__edit-comment-button"
        >
          Edit
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

import CommentsService from '@/services/commentsService/Comments.service'

export default {
  name: 'CommentsListItem',

  props: {
    commentId: {
      type: Number,
      required: true,
    },

    avatar: {
      type: String,
      required: false,
    },

    body: {
      type: String,
      required: true,
    },

    authorname: {
      type: String,
      required: true,
    },

    authorId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      commentBody: this.body,
      editMode: false,
    }
  },

  computed: {
    ...mapGetters(['isAuth', 'currentUserId']),

    fullAvatarUrl() {
      const baseUrl = 'http://localhost:1337'

      if (this.avatar) return `${baseUrl}${this.avatar}`

      return false
    },
  },

  methods: {
    async onDeleteComment() {
      await CommentsService.delete(this.commentId)

      this.$emit('comment-deleted')
    },

    async toggleEditCommentMode() {
      this.editMode = !this.editMode
    },

    async onEdit() {
      const commentToEdit = {
        data: {
          body: this.commentBody,
        },
      }
      await CommentsService.edit(this.commentId, commentToEdit)

      this.editMode = false
    },
  },
}
</script>

<style lang="scss" scoped>
.comment-item {
  display: flex;
  gap: 10px;
  padding: 5px;

  &__avatar {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  &__body {
    font-size: 1.1rem;
  }

  &__authorname {
    margin-bottom: 5px;
  }

  &:not(:last-child) &__right-box {
    border-bottom: 1px solid #23243e;
  }

  &__right-box {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
  }
}

.comment-actions {
  display: flex;
  gap: 10px;

  &__delete-comment-button,
  &__edit-comment-button {
    align-self: center;
    border: none;
    color: #fff;
    padding: 7px;
    border-radius: 10px;
    background-color: transparent;
    transition: all 0.2s;

    @media (any-hover: hover) {
      &:hover {
        background-color: #2a719d33;
      }
    }
  }
}
</style>
